'use strict';

// require
var fs			= require('fs');
var path 		= require('path');
var compressing = require('compressing');

// qiao
var qiao = {};
// qiao.file = require('qiao.util.file');

/**
 * uncompress
 * 	compressType，压缩的文件类型
 *  compressFile，待解压缩的文件
 *  destFolder，解压缩后存放的文件夹
 */
exports.uncompress = function(compressType, compressFile, destFolder){
	return new Promise(function(resolve, reject){
		var compress = compressing[compressType];

		compress.uncompress(compressFile, destFolder)
		.then(function(){
			resolve();
		})
		.catch(function(e){
			reject(e);
		});
	});
};

/**
 * compress file
 * 	compressType，压缩的文件类型
 * 	sourceFile，待压缩的文件
 * 	destPath，压缩后的文件
 */
exports.compressFile = function(compressType, sourceFile, destPath){
	// if(!qiao.file.isExists(destZip)) qiao.file.mkdir(destZip);
	
	return new Promise(function(resolve, reject){
		var compress = compressing[compressType];

		compress.compressFile(sourceFile, destPath)
		.then(function(){
			resolve();
		})
		.catch(function(e){
			reject(e);
		});
	});
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