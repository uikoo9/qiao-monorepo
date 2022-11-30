'use strict';

// q
var q = require('../index.js');

// db
var db = q.createDB('./__tests__/test.db');

// test
async function test() {
  try {
    const rows = await q.showTables(db);
    console.log(rows);
  } catch (e) {
    console.log(e);
  }
}

// run
test();
