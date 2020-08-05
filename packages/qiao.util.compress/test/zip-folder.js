'use strict';

var path    = require('path');
var q       = require('../qiao.util.compress');

var test = function(){
    var sourceFolder    = path.resolve(__dirname, '../node_modules');
    var destPath        = path.resolve(__dirname, '../files_out/node_modules.zip');

    q.zipFolder(sourceFolder, destPath, function(){
        console.log(`zip folder: ${sourceFolder} success, to ${destPath}`);
    }, function(e){
        console.log(`zip folder: ${sourceFolder} fail: ${e}`);
    });
};

test();