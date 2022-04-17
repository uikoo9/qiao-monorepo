'use strict';

// fs
var fs = require('fs');

/**
 * isExists
 * 	fpath : file or folder path
 */
module.exports = function(fpath){
    try{
        fs.accessSync(fpath);
        
        return true;
    }catch(e){
        return false;
    }
};