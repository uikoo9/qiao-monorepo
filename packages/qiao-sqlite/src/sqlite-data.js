/**
 * insertData
 * @param {*} db
 * @param {*} sql
 * @param {*} params
 * @returns
 */
export const insertData = (db, sql, params) => {
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
export const deleteData = (db, sql, params) => {
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
export const modifyData = (db, sql, params) => {
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
export const selectData = (db, sql, params) => {
  return new Promise((resolve, reject) => {
    if (!db || !sql) return reject(new Error('need db and sql'));

    let _params = params || [];
    db.all(sql, _params, (err, row) => {
      return err ? reject(err) : resolve(row);
    });
  });
};
