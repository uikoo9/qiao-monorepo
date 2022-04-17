'use strict';

// fs
var fs = require('fs');

// path
var path = require('path');

// is exists
var isExists = require('./is-exists.js');

/**
 * get folders and files
 * @param {*} fpath 
 * @param {*} folders 
 * @param {*} files 
 */
exports.getFoldersAndFiles = function(fpath, folders, files){
	fs.readdirSync(fpath).forEach(function(name){
		var stat = fs.statSync(fpath + name);
		if(stat.isDirectory()){
			folders.push({
				path : fpath,
				name : name
			});
			
			exports.getFoldersAndFiles(fpath + name + '/', folders, files);
		}else{
			files.push({
				path : fpath,
				name : name
			});
		}
	});
};

/**
 * check dir
 * @param {*} dir 
 * @param {*} list 
 */
exports.checkDir = function(dir, list){
	var pdir = path.dirname(dir);
	
	if(!isExists(pdir)){
		list.push(pdir);
		exports.checkDir(pdir, list);
	}
};