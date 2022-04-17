'use strict';

// fs
var fs = require('fs');

// util
var util = require('./util.js');

/**
* mk dir
* 	dir : must end with /
*/
module.exports = function(dir){
    try{
        // check dir
        var dirs = [];
        util.checkDir(dir, dirs);
        
        // check dirs
        if(!dirs.length) return false;
        
        // mkdir
        dirs.reverse();
        for(var i=0; i<dirs.length; i++) fs.mkdirSync(dirs[i]);
        
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
};