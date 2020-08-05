'use strict';

var path    = require('path');
var q       = require('../qiao.util.compress');

var test = function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/source-file.js');
    var destPath    = path.resolve(__dirname, '../files_out/source-file.zip');

    q.compressFile('zip', sourceFile, destPath, function(){
        console.log(`compress file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }, function(e){
        console.log(`compress file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    });
};

test();