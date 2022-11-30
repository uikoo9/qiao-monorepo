'use strict';

// q
var q = require('../index.js');

// db
var db = q.createDB('./__tests__/test.db');

// data
var sql = 'delete from t_project where rowid=?';

// test
async function test() {
  try {
    await q.deleteData(db, sql, [1]);
  } catch (e) {
    console.log(e);
  }
}

// run
test();
