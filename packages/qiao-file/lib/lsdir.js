'use strict';

// util
var util = require('./util.js');

/**
* ls dir
* 	dir : must end with /
*/
module.exports = function(dir){
    var folders = [];
    var files	= [];
    util.getFoldersAndFiles(dir, folders, files);
    
    return {
        folders : folders,
        files	: files
    };
};