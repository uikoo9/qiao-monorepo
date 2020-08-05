'use strict';

var path    = require('path');
var q       = require('../qiao.util.compress');

var test = async function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/source-file.js');
    var destPath    = path.resolve(__dirname, '../files_out/source-file.zip');

    try{
        await q.zipFileSync(sourceFile, destPath);
        console.log(`zip file: ${sourceFile} success, to ${destPath}`);
    }catch(e){
        console.log(`zip file: ${sourceFile} fail: ${e}`);
    }
};

test();