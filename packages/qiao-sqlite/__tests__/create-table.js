'use strict';

// q
var q = require('../index.js');

// db
var db = q.createDB('./__tests__/test.db');

// table
var sql = 'CREATE TABLE if not exists t_project (project_name TEXT, project_appid TEXT, project_icon_url TEXT)';

// test
async function test() {
  try {
    await q.createTable(db, sql);
  } catch (e) {
    console.log(e);
  }
}

// run
test();
