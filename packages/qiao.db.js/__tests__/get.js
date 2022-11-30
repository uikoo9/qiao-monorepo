'use strict';

var q = require('../index.js');

var test = async function () {
  var databaseName = 'db_test';
  var tableName = 't_test1';

  try {
    var db = await q.openDB(databaseName);
    var s = await q.get(db, tableName, 1);
    console.log(s);
  } catch (e) {
    console.log(e);
  }
};

test();
