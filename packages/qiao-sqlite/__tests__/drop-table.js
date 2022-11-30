'use strict';

// q
var q = require('../index.js');

// db
var db = q.createDB('./__tests__/test.db');

// test
async function test() {
  try {
    console.log(await q.showTables(db));
    await q.dropTable(db, 't_project');
    console.log(await q.showTables(db));
  } catch (e) {
    console.log(e);
  }
}

// run
test();
