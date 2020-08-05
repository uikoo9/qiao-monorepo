'use strict';

var path    = require('path');
var q       = require('../qiao.util.compress');

var test = async function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/source-file.js');
    var destPath    = path.resolve(__dirname, '../files_out/source-file.gz');

    try{
        await q.gzipFileSync(sourceFile, destPath);
        console.log(`gzip file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }catch(e){
        console.log(`gzip file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    }
};

test();