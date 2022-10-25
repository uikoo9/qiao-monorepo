'use strict';

var q = require('../index.js');

var test = async function () {
    try {
        var host = 'baidu.com';
        var res = await q.ping(host);
        console.log(res);
    } catch (e) {
        console.log(e);
    }
};

test();