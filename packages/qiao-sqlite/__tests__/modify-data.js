'use strict';

// q
var q = require('../index.js');

// db
var db = q.createDB('./__tests__/test.db');

// data
var sql = 'update t_project set project_name=?';

// test
async function test() {
  try {
    await q.modifyData(db, sql, ['name1']);
  } catch (e) {
    console.log(e);
  }
}

// run
test();
