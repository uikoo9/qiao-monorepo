'use strict';

var path    = require('path');
var q       = require('../qiao.util.compress');

var test = async function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/uncompress-file.zip');
    var destPath    = path.resolve(__dirname, '../files_out/');

    try{
        await q.unzipSync(sourceFile, destPath);
        console.log(`unzip file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }catch(e){
        console.log(`unzip file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    }
};

test();