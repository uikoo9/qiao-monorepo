'use strict';

var q = require('../index.js');

// open db
test('open db', async function () {
    var databaseName = 'db_test';
    var db = await q.openDB(databaseName);
    console.log(db);

    expect(db).toBeDefined();
});