'use strict';

var path    = require('path');
var q       = require('../qiao.util.compress');

var test = function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/source-file.js');
    var destPath    = path.resolve(__dirname, '../files_out/source-file.zip');

    q.zipFile(sourceFile, destPath, function(){
        console.log(`zip file: ${sourceFile} success, to ${destPath}`);
    }, function(e){
        console.log(`zip file: ${sourceFile} fail: ${e}`);
    });
};

test();