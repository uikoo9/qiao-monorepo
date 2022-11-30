'use strict';

var q = require('../index.js');

var test = async function () {
  var databaseName = 'db_test';
  var tableName = 't_test1';

  try {
    var db = await q.openDB(databaseName);
    await q.del(db, tableName, 2);
  } catch (e) {
    console.log(e);
  }
};

test();
