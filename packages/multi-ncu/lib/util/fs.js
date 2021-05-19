'use strict';

// fs
var fs = require('fs');

// sub folders
exports.subFolders = [];

/**
 * is exists
 * @param {string} dir 
 */
exports.isExists = function(dir){
	try{
		fs.accessSync(dir);
		return true;
	}catch(e){
		return false;
	}
};

/**
 * ls dir
 * @param {string} dir 
 */
exports.lsdir = function(dir){
	fs.readdirSync(dir).forEach(function(name){
		var stat = fs.statSync(dir + name);
		if(!stat.isDirectory()) return;

		exports.subFolders.push(dir + name);
	});
};