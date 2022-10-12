'use strict';

var q = require('../index.js');

var test = async function () {
    try {
        var dbs = await q.listDB();
        console.log(dbs);
    } catch (e) {
        console.log(e);
    }
};

test();