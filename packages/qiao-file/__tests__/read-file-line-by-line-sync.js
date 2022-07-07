'use strict';

// q
var q = require('../index.js');

// run
async function test(){
    var filePath = './rm.js';
    var lines = await q.readFileLineByLineSync(filePath);
    console.log(lines);

    // clear
    filePath = null;
    lines = null;
}
test();