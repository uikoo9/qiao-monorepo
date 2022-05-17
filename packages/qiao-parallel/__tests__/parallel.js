'use strict';

// q
var q = require('../index.js');

// qconsole
var qconsole = require('qiao-console');

// funcs
var funcs = [
    getTestFunction(),
    getTestFunction(),
    getTestFunction(),
    getTestFunction(),
];

// values
var values = [
    100,
    300,
    200,
    400,
];

// get test function
function getTestFunction(){
    return function(timeout){
        return new Promise(function(resolve, reject){
            setTimeout(() => {
                return resolve(timeout);
            }, timeout);
        });
    }
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
    
    q.parallelByIIFE(funcs, values, callback, complete);
}

test();