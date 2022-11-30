'use strict';

var sqlite3 = require('sqlite3');

// sqlite3

/**
 * createDB
 * @param {*} dbName
 */
const createDB = (dbName) => {
  if (!dbName) throw new Error('need db name');

  const sqlite = sqlite3.verbose();
  return new sqlite.Database(dbName);
};

/**
 * createTable
 * @param {*} sql
 */
const createTable = (db, sql) => {
  return new Promise((resolve, reject) => {
    if (!db || !sql) return reject(new Error('need db and sql'));

    db.run(sql, (e) => {
      return e ? reject(e) : resolve();
    });
  });
};

/**
 * dropTable
 * @param {*} db
 * @param {*} tableName
 * @returns
 */
const dropTable = (db, tableName) => {
  return new Promise((resolve, reject) => {
    if (!db || !tableName) return reject(new Error('need db and tableName'));

    const sql = `drop table ${tableName}`;
    db.run(sql, (e) => {
      return e ? reject(e) : resolve();
    });
  });
};

/**
 * showTables
 * @param {*} db
 * @returns
 */
const showTables = (db) => {
  return new Promise((resolve, reject) => {
    if (!db) return reject(new Error('need db'));

    const sql = 'select name from sqlite_master where type=\'table\' order by name';
    db.all(sql, (e, rows) => {
      return e ? reject(e) : resolve(rows);
    });
  });
};

/**
 * insertData
 * @param {*} db
 * @param {*} sql
 * @param {*} params
 * @returns
 */
const insertData = (db, sql, params) => {
  return new Promise((resolve, reject) => {
    if (!db || !sql) return reject(new Error('need db and sql'));

    let _params = params || [];
    db.run(sql, _params, (e) => {
      return e ? reject(e) : resolve();
    });
  });
};

/**
 * deleteData
 * @param {*} db
 * @param {*} sql
 * @param {*} params
 * @returns
 */
const deleteData = (db, sql, params) => {
  return new Promise((resolve, reject) => {
    if (!db || !sql) return reject(new Error('need db and sql'));

    let _params = params || [];
    db.run(sql, _params, (e) => {
      return e ? reject(e) : resolve();
    });
  });
};

/**
 * modifyData
 * @param {*} db
 * @param {*} sql
 * @param {*} params
 * @returns
 */
const modifyData = (db, sql, params) => {
  return new Promise((resolve, reject) => {
    if (!db || !sql) return reject(new Error('need db and sql'));

    let _params = params || [];
    db.run(sql, _params, (e) => {
      return e ? reject(e) : resolve();
    });
  });
};

/**
 * selectData
 * @param {*} db
 * @param {*} sql
 * @param {*} params
 * @returns
 */
const selectData = (db, sql, params) => {
  return new Promise((resolve, reject) => {
    if (!db || !sql) return reject(new Error('need db and sql'));

    let _params = params || [];
    db.all(sql, _params, (err, row) => {
      return err ? reject(err) : resolve(row);
    });
  });
};

exports.createDB = createDB;
exports.createTable = createTable;
exports.deleteData = deleteData;
exports.dropTable = dropTable;
exports.insertData = insertData;
exports.modifyData = modifyData;
exports.selectData = selectData;
exports.showTables = showTables;
