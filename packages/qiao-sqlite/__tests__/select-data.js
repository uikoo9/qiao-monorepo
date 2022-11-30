'use strict';

// q
var q = require('../index.js');

// db
var db = q.createDB('./__tests__/test.db');

// sql
var sql = 'SELECT rowid,* FROM t_project';

// test
async function test() {
  try {
    var rows = await q.selectData(db, sql);
    console.log(rows);
  } catch (e) {
    console.log(e);
  }
}

// run
test();
