/**
 * open db
 * @param {*} databaseName
 * @param {*} version
 * @returns
 */
export const openDB = (databaseName, version) => {
  return new Promise((resolve, reject) => {
    const request = version
      ? window.indexedDB.open(databaseName, version)
      : window.indexedDB.open(databaseName);
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
export const listDB = () => {
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
export const delDB = (databaseName) => {
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
export const newDB = async (db) => {
  if (!db) return;

  let databaseName = db.name;
  let databaseVersion = db.version;
  if (!databaseName || !databaseVersion) return;
  db.close();

  return await openDB(databaseName, ++databaseVersion);
};
