'use strict';

var path    = require('path');
var q       = require('../qiao.util.compress');


var test = function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/uncompress-file-中文.zip');
    var destPath    = path.resolve(__dirname, '../files_out/');

    q.uncompress('zip', sourceFile, destPath, function(){
        console.log(`uncompress file: ${sourceFile} success, to ${destPath}`);
    }, function(e){
        console.log(`uncompress file: ${sourceFile} fail: ${e}`);
    });
};

test();