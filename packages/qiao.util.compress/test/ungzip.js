'use strict';

var path    = require('path');
var q       = require('../qiao.util.compress');


var test = function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/ungzip-file.gz');
    var destPath    = path.resolve(__dirname, '../files_out/ungzip-file.js');

    q.ungzip(sourceFile, destPath, function(){
        console.log(`ungzip file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }, function(e){
        console.log(`ungzip file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    });
};

test();