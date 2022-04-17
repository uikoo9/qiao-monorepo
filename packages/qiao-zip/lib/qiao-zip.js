'use strict';

// require
var fs		= require('fs');
var path 	= require('path');
var admZip 	= require('adm-zip');
var archiver= require('archiver');
var iconv	= require('iconv-lite');

// qiao
var qiao = {};
qiao.file = require('qiao-file');

/**
 * unzip
 * 	zipFile，待解压缩的zip文件
 * 	destFolder，解压缩后存放的文件夹
 */
exports.unzip = function(zipFile, destFolder){
	var zip = new admZip(zipFile);
	
	var zipEntries = zip.getEntries();
	for(var i=0; i<zipEntries.length; i ++){
		var entry = zipEntries[i];
		entry.entryName = iconv.decode(entry.rawEntryName, 'gbk');
	}
	
	zip.extractAllTo(destFolder, true);
};

/**
 * zip file
 * 	sourceFile，待压缩的文件
 * 	destZip，压缩后的zip文件
 * 	cb，回调函数
 */
exports.zipFile = function(sourceFile, destZip, cb){
	if(!qiao.file.isExists(destZip)) qiao.file.mkdir(destZip);
	
	// init
	var output = fs.createWriteStream(destZip);
	var archive = archiver('zip', {
	    zlib: { level: 9 }
	});
	
	// on
	output.on('close', function() {
		cb(null, 'zip file success!');
	});
	archive.on('error', function(err) {
		cb(err);
	});

	// zip
	archive.pipe(output);
	archive.file(sourceFile, {name : path.basename(sourceFile)});
	archive.finalize();
};

/**
 * zip file sync
 * 	sourceFile，待压缩的文件
 * 	destZip，压缩后的zip文件
 * 
 * return msg
 */
exports.zipFileSync = function(sourceFile, destZip){
	return new Promise(function(resolve, reject){
		exports.zipFile(sourceFile, destZip, function(err, msg){
			return err ? reject(err) : resolve(msg);
		});
	});
};

/**
* zip folder
* 	sourceFolder，待压缩的文件夹
* 	destZip，压缩后的zip文件
* 	cb，回调函数
* 	subdir，是否需要包一层
*/
exports.zipFolder = function(sourceFolder, destZip, cb, subdir){
	if(!qiao.file.isExists(destZip)) qiao.file.mkdir(destZip);
	
	// init
	var output = fs.createWriteStream(destZip);
	var archive = archiver('zip', {
	    zlib: { level: 9 }
	});
	
	// on
	output.on('close', function() {
		cb(null, 'zip folder success!');
	});
	archive.on('error', function(err) {
		cb(err);
	});

	// zip
	archive.pipe(output);
	archive.directory(sourceFolder, subdir ? subdir : false);
	archive.finalize();
};

/**
 * zip folder sync
 * 	sourceFolder，待压缩的文件夹
 * 	destZip，压缩后的zip文件
 * 	subdir，是否需要包一层
 * 
 * return msg
 */
exports.zipFolderSync = function(sourceFolder, destZip, subdir){
	return new Promise(function(resolve, reject){
		exports.zipFolder(sourceFolder, destZip, function(err, msg){
			return err ? reject(err) : resolve(msg);
		}, subdir);
	});
};