'use strict';

// q
var q = require('../index.js');

// run
async function test(){
    var filePath = './rm.js';
    var destPath = '../dist/rm.js';
    var lines = await q.readFileLineByLineSync(filePath);
    q.writeFileFromLines(destPath, lines);

    // clear
    filePath = null;
    destPath = null;
    lines = null;
};
test();