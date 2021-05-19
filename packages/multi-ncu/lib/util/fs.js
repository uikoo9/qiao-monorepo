'use strict';

// fs
var fs = require('fs');

// path
var path = require('path');

// sub folders
exports.subFolders = [];

/**
 * resolve
 * @param  {...string} paths 
 */
exports.resolve = function(...paths){
	return path.resolve(...paths);
};

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