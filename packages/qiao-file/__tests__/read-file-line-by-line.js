'use strict';

// q
var q = require('../index.js');

// run
async function test(){
    var filePath = './rm.js';
    q.readFileLineByLine(filePath, onLine, onClose);
}
test();

// on line
function onLine(line){
    console.log(line);
}

// on close
function onClose(){
    console.log('close');
}