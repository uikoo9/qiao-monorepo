'use strict';

var path    = require('path');
var q       = require('../qiao.util.compress');

var test = async function(){
    var sourceFolder    = path.resolve(__dirname, '../node_modules');
    var destPath        = path.resolve(__dirname, '../files_out/node_modules.zip');

    try{
        await q.compressFolder('zip', sourceFolder, destPath);
        console.log(`compress folder success`);
        console.log(`   source file:    ${sourceFolder}`);
        console.log(`   dest path:      ${destPath}`);
    }catch(e){
        console.log(`compress folder fail`);
        console.log(`   source folder:  ${sourceFolder}`);
        console.log(`   error:          ${e}`);
    }
};

test();