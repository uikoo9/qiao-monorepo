'use strict';

// q
var q = require('../index.js');

// db
var db = q.createDB('./__tests__/test.db');

// data
var sql = 'insert into t_project values (?, ?, ?)';

// test
async function test() {
  try {
    await q.insertData(db, sql, ['name', 'appid', 'url']);
  } catch (e) {
    console.log(e);
  }
}

// run
test();
