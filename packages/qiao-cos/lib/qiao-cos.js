'use strict';

// cos
var COS 	= require('cos-nodejs-sdk-v5');

// qiao
var qiao 	= {};
qiao.cli	= require('qiao-cli');
qiao.file	= require('qiao-file');

/**
 * client
 * 获取client对象
 * 	config，配文件
 */
exports.client = function(config){
	if(!config) 			throw new Error('need config params');
	if(!config.SecretId) 	throw new Error('need config.SecretId params');
	if(!config.SecretKey) 	throw new Error('need config.SecretKey params');
	if(!config.Region) 	    throw new Error('need config.Region params');
	if(!config.Bucket) 	    throw new Error('need config.Bucket params');
	
	return {
		config 	: config,
		cos		: new COS({
			SecretId	: config.SecretId,
			SecretKey	: config.SecretKey
		})
	};
};

/**
 * uploadFile
 * 上传文件
 * 	client
 * 	dest，目标路径
 * 	source，待上传文件路径
 * 	cb，回调函数
 */
exports.uploadFile = function(client, dest, source, cb){
	client.cos.sliceUploadFile({
		Region	: client.config.Region,
		Bucket	: client.config.Bucket,
		Key		: dest,
		FilePath: source
	}, function(err, data){
		if(cb) cb(err, data);
	});
};

/**
 * uploadFileSync
 * 上传文件
 * 	client
 * 	dest，目标路径
 * 	source，待上传文件路径
 * 
 * return rs
 */
exports.uploadFileSync = function(client, dest, source){
	return new Promise(function(resolve, reject){
		exports.uploadFile(client, dest, source, function(err, data){
			return err ? reject(err) : resolve(data);
		});
	});
};

/**
 * uploadFolder
 * 上传文件夹
 * 	client
 * 	destFolder，目标路径，末尾不要添加/
 * 	sourceFolder，待上传的文件夹，末尾不要加/
 * 	cb，回调函数
 */
exports.uploadFolder = function(client, destFolder, sourceFolder, cb){
	console.time('total use');
	
	var paths 	= qiao.file.lsdir(sourceFolder + '/');
	var files 	= paths.files;
	var bar 	= new qiao.cli.progress('uploading files... :current/:total', { total: files.length });
	
	var allFiles = [];
	var sucFiles = [];
	var failFiles= [];
	for(var i=0; i<files.length; i++){
		var file = files[i].path + files[i].name;
		var dest = destFolder + file.substr(sourceFolder.length);
		exports.uploadFile(client, dest, file, function(err, data){
			allFiles.push(data);
			if(err || !data || data.statusCode != 200){
				failFiles.push(err || data);
			}else{
				sucFiles.push(data);
			}
			
			bar.tick();
			
			if(bar.complete){
				var obj = {};
				obj.paths 	= paths;
				obj.all		= allFiles;
				obj.suc		= sucFiles;
				obj.fail	= failFiles;
				
				console.log();
				console.timeEnd('total use');
				console.log();
				
				if(cb) cb(obj);
			}
		});
	}
};

/**
 * uploadFolderSync
 * 上传文件夹
 * 	client
 * 	destFolder，目标路径，末尾不要添加/
 * 	sourceFolder，待上传的文件夹，末尾不要加/
 */
exports.uploadFolderSync = function(client, destFolder, sourceFolder){
	return new Promise(function(resolve, reject){
		exports.uploadFolder(client, destFolder, sourceFolder, function(rs){
			return resolve(rs);
		});
	});
};
