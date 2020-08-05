'use strict';

var path    = require('path');
var q       = require('../qiao.util.compress');

var test = async function(){
    var sourceFolder    = path.resolve(__dirname, '../node_modules');
    var destPath        = path.resolve(__dirname, '../files_out/node_modules.zip');

    try{
        await q.zipFolderSync(sourceFolder, destPath);
        console.log(`compress folder: ${sourceFolder} success, to ${destPath}`);
    }catch(e){
        console.log(`compress folder: ${sourceFolder} fail: ${e}`);
    }
};

test();