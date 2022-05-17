'use strict';

// q
var q = require('../index.js');

// qconsole
var qconsole = require('qiao-console');

// values
var values = [
    100,
    300,
    200,
    400,
];

// handler
function handler(timeout){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            return resolve(timeout);
        }, timeout);
    });
}

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
    
    q.parallelByIIFE(handler, values, callback, complete);
}

test();