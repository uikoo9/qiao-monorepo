'use strict';

// fs
var fs = require('fs');

/**
 * cp
 * @param {*} src file or folder src path
 * @param {*} dest file or folder dest path
 * @returns 
 */
module.exports = function(src, dest){
    try{
		var stat = fs.statSync(src);
		if(stat.isDirectory()){
            fs.cpSync(src, dest, {recursive:true});
		}else{
            fs.copyFileSync(src, dest); 
        }

        return true;
    }catch(e){
        console.log(e);
        return false;
    }
};