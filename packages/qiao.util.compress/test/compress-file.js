'use strict';

var q = require('../lib/qiao.util.compress');

var path = require('path');

var test = async function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/source-file.js');
    var destPath    = path.resolve(__dirname, '../files_out/source-file.zip');

    try{
        await q.compressFile('zip', sourceFile, destPath);
    }catch(e){
        console.log(e);
    }
};

test();