'use strict';

// q
var q = require('../index.js');

// path
var path = require('path');

// qconsole
var qconsole = require('qiao-console');

// values
var values = [
    100,
    300,
    200,
    400,
];

// callback
function callback(index, res){
    qconsole.writeLine(index, `${index} ${res}`);
}

// complete
function complete(l){
    qconsole.writeLine(l, `complete`);
}

// test
function test(){
    qconsole.clear();

    var jsPath = path.resolve(__dirname, './fork-handler.js');
    q.parallelByFork(jsPath, values, callback, complete);
}

test();