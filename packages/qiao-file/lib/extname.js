'use strict';

// path
var path = require('path');

/**
 * extname
 * 	filePath : file path
 */
module.exports = function(filePath){
    if(!filePath) return null;

	return path.extname(filePath.toLowerCase());
};