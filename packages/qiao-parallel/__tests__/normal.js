'use strict';

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

// normal
async function normal(){
    console.time('qiao-parallel');

    for(var i=0; i<values.length; i++){
        var value = values[i];

        var res = await handler(value);
        callback(i, res);
    }

    console.timeEnd('qiao-parallel');
}

// test
function test(){
    normal();
}

test();