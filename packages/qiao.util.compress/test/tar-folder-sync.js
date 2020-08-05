'use strict';

var path    = require('path');
var q       = require('../qiao.util.compress');

var test = async function(){
    var sourceFolder    = path.resolve(__dirname, '../node_modules');
    var destPath        = path.resolve(__dirname, '../files_out/node_modules.tar');

    try{
        await q.tarFolderSync(sourceFolder, destPath);
        console.log(`tar folder success`);
        console.log(`   source file:    ${sourceFolder}`);
        console.log(`   dest path:      ${destPath}`);
    }catch(e){
        console.log(`tar folder fail`);
        console.log(`   source folder:  ${sourceFolder}`);
        console.log(`   error:          ${e}`);
    }
};

test();