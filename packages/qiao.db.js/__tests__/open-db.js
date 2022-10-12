'use strict';

var q = require('../index.js');

var test = async function () {
    try {
        var databaseName = 'db_test';
        var db = await q.openDB(databaseName);
        console.log(db);
    } catch (e) {
        console.log(e);
    }
};

test();