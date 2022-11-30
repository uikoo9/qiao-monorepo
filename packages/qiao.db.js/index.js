'use strict';

/**
 * open db
 * @param {*} databaseName
 * @param {*} version
 * @returns
 */
const openDB = (databaseName, version) => {
  return new Promise((resolve, reject) => {
    const request = version ? window.indexedDB.open(databaseName, version) : window.indexedDB.open(databaseName);
    request.onerror = (event) => {
      reject(event.target.error);
    };
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onupgradeneeded = (event) => {
      resolve(event.target.result);
    };
  });
};

/**
 * list db
 * @returns
 */
const listDB = () => {
  return new Promise((resolve, reject) => {
    const promise = indexedDB.databases();
    promise
      .then((dbs) => {
        resolve(dbs);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

/**
 * del db
 * @param {*} databaseName
 * @returns
 */
const delDB = (databaseName) => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.deleteDatabase(databaseName);
    request.onerror = (event) => {
      reject(event.target.error);
    };
    request.onsuccess = () => {
      resolve();
    };
  });
};

/**
 * new db
 * @param {*} db
 * @returns
 */
const newDB = async (db) => {
  if (!db) return;

  let databaseName = db.name;
  let databaseVersion = db.version;
  if (!databaseName || !databaseVersion) return;
  db.close();

  return await openDB(databaseName, ++databaseVersion);
};

// db

/**
 * create table
 * @param {*} db
 * @param {*} tables
 * @returns
 */
const createTable = async (db, tables) => {
  if (!db || !tables || !tables.length) return null;
  const newDB$1 = await newDB(db);

  const res = [];
  for (let i = 0; i < tables.length; i++) {
    const table = tables[i];
    if (newDB$1.objectStoreNames.contains(table.name)) continue;

    // create table
    const objectStore = createNewTable(newDB$1, table);

    // push
    res.push(objectStore);
  }

  // obj
  const obj = {};
  obj.res = res;
  obj.db = newDB$1;

  return obj;
};

// create new table
function createNewTable(db, table) {
  if (!db || !table) return;

  // key
  const key = {};
  if (table.key == 'auto') {
    key.autoIncrement = true;
  } else {
    key.keyPath = table.key;
  }

  // create
  const objectStore = db.createObjectStore(table.name, key);

  // index
  createIndex(objectStore, table);

  // return
  return objectStore;
}

// create index
function createIndex(os, table) {
  if (!os || !table || !table.index || !table.index.length) return;

  for (let j = 0; j < table.index.length; j++) {
    const item = table.index[j];
    const name = item.name;
    const index = item.index;
    const unique = item.unique;
    os.createIndex(name, index, { unique: unique });
  }
}

/**
 * del table
 * @param {*} db
 * @param {*} tableName
 * @returns
 */
const delTable = async (db, tableName) => {
  if (!db || !tableName) return;

  const newDB$1 = await newDB(db);
  newDB$1.deleteObjectStore(tableName);
};

/**
 * get
 * @param {*} db
 * @param {*} tableName
 * @param {*} key
 * @returns
 */
const get = (db, tableName, key) => {
  return new Promise((resolve) => {
    getData(db, tableName, key, (r) => {
      resolve(r);
    });
  });
};

/**
 * save
 * @param {*} db
 * @param {*} tableName
 * @param {*} key
 * @param {*} data
 * @returns
 */
const save = (db, tableName, key, data) => {
  return new Promise((resolve) => {
    getData(db, tableName, key, (r) => {
      if (r) {
        putData(db, tableName, data, (rr) => {
          resolve(rr);
        });
      } else {
        addData(db, tableName, data, (rr) => {
          resolve(rr);
        });
      }
    });
  });
};

/**
 * del
 * @param {*} db
 * @param {*} tableName
 * @param {*} key
 * @returns
 */
const del = (db, tableName, key) => {
  return new Promise((resolve, reject) => {
    const tx = db.transaction([tableName], 'readwrite');
    const request = tx.objectStore(tableName).delete(key);

    request.onerror = (event) => {
      reject(event.target.error);
    };
    request.onsuccess = () => {
      resolve();
    };
  });
};

/**
 * clear
 * @param {*} db
 * @param {*} tableName
 * @returns
 */
const clear = (db, tableName) => {
  return new Promise((resolve, reject) => {
    const tx = db.transaction([tableName], 'readwrite');
    const request = tx.objectStore(tableName).clear();

    request.onerror = (event) => {
      reject(event.target.error);
    };
    request.onsuccess = () => {
      resolve();
    };
  });
};

// get data
function getData(db, tableName, key, cb) {
  // check
  if (!db || !tableName || !key) {
    cb(null);
    return;
  }

  // get
  const tx = db.transaction([tableName], 'readonly');
  const request = tx.objectStore(tableName).get(key);
  request.onerror = () => {
    if (cb) cb(null);
  };
  request.onsuccess = () => {
    if (cb) cb(request.result);
  };
}

// add data
function addData(db, tableName, data, cb) {
  const tx = db.transaction([tableName], 'readwrite');
  const request = tx.objectStore(tableName).add(data);

  request.onerror = () => {
    if (cb) cb(false);
  };
  request.onsuccess = () => {
    if (cb) cb(true);
  };
}

// put data
function putData(db, tableName, data, cb) {
  const tx = db.transaction([tableName], 'readwrite');
  const request = tx.objectStore(tableName).put(data);

  request.onerror = () => {
    if (cb) cb(false);
  };
  request.onsuccess = () => {
    if (cb) cb(true);
  };
}

/**
 * get data
 * @param {*} db
 * @param {*} tableName
 * @param {*} indexName
 * @returns
 */
const getAll = (db, tableName, indexName) => {
  return new Promise((resolve, reject) => {
    const tx = db.transaction([tableName], 'readonly');
    const os = tx.objectStore(tableName);
    const index = os.index(indexName);
    const request = index.getAll();

    request.onerror = (event) => {
      reject(event.target.error);
    };
    request.onsuccess = () => {
      resolve(request.result);
    };
  });
};

exports.clear = clear;
exports.createTable = createTable;
exports.del = del;
exports.delDB = delDB;
exports.delTable = delTable;
exports.get = get;
exports.getAll = getAll;
exports.listDB = listDB;
exports.newDB = newDB;
exports.openDB = openDB;
exports.save = save;
