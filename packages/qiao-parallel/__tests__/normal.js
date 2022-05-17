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

// normal
async function normal(){
    console.time('qiao-parallel');

    for(var i=0; i<funcs.length; i++){
        var func = funcs[i];
        var value = values[i];

        var res = await func(value);
        callback(i, res);
    }

    console.timeEnd('qiao-parallel');
}

// test
function test(){
    normal();
}

test();