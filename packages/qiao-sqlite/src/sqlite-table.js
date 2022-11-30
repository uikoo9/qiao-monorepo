/**
 * createTable
 * @param {*} sql
 */
export const createTable = (db, sql) => {
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
export const dropTable = (db, tableName) => {
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
export const showTables = (db) => {
  return new Promise((resolve, reject) => {
    if (!db) return reject(new Error('need db'));

    const sql = 'select name from sqlite_master where type=\'table\' order by name';
    db.all(sql, (e, rows) => {
      return e ? reject(e) : resolve(rows);
    });
  });
};
