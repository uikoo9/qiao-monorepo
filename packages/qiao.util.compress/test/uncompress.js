'use strict';

var q = require('../lib/qiao.util.compress');

var path = require('path');

var test = async function(){
    var compressFile = path.resolve(__dirname, '../files_in/source-file.zip');
    var compressDest = path.resolve(__dirname, '../files_out/');

    try{
        await q.uncompress('zip', compressFile, compressDest);
    }catch(e){
        console.log(e);
    }
};

test();