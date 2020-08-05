'use strict';

var q = require('../lib/qiao.util.compress');

var path = require('path');

var test = async function(){
    var compressFile = path.resolve(__dirname, '../files_in/unzip.zip');
    var compressDest = path.resolve(__dirname, '../files_out/');
    console.log(compressFile, compressDest);

    try{
        await q.unzip(compressFile, compressDest);
    }catch(e){
        console.log(e);
    }
};

test();