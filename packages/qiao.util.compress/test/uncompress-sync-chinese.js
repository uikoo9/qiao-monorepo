'use strict';

var path    = require('path');
var q       = require('../qiao.util.compress');

var test = async function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/uncompress-file-中文.zip');
    var destPath    = path.resolve(__dirname, '../files_out/');

    try{
        await q.uncompressSync('zip', sourceFile, destPath);
        console.log(`uncompress file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }catch(e){
        console.log(`uncompress file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    }
};

test();