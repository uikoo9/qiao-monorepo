'use strict';

// fs
var fs = require('fs');

// util
var util = require('./util.js');

/**
 * rm
 * 	fpath, file or folder path, folder must end with /
 */
module.exports = function(fpath){
    try{
		// rm file
		var pathStat = fs.statSync(fpath);
		if(!pathStat.isDirectory()){
			fs.unlinkSync(fpath);
			
			return true;
		}
		
		// ls dir
		var folders = [];
		var files 	= [];
		util.getFoldersAndFiles(fpath, folders, files);
		folders.reverse();
		
		// rm folder
		for(var i=0; i<files.length; i++) fs.unlinkSync(files[i].path + files[i].name);
		for(var i=0; i<folders.length; i++) fs.rmdirSync(folders[i].path + folders[i].name);
		fs.rmdirSync(fpath);
		
		// return
		return true;
	}catch(e){
		console.log(e);
		return false;
	}
};