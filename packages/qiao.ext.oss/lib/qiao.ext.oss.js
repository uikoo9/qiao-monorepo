'use strict';

var co	= require('co');
var fs	= require('fs');
var OSS = require('ali-oss');

/**
 * client
 * 获取client对象
 * 	config，配文件
 */
exports.client = function(config){
	if(!config) 				throw new Error('need config params');
	if(!config.region) 			throw new Error('need config.region params');
	if(!config.accessKeyId) 	throw new Error('need config.accessKeyId params');
	if(!config.accessKeySecret)	throw new Error('need config.accessKeySecret params');
	if(!config.bucket) 			throw new Error('need config.bucket params');
	
	return new OSS({
		region 			: config.region,
		accessKeyId 	: config.accessKeyId,
		accessKeySecret	: config.accessKeySecret,
		bucket 			: config.bucket
	});
};

/**
 * listBuckets
 * 列出buckets
 * 	client
 * 	cb，回调函数
 */
exports.listBuckets = function(client, cb){
	co(function* () {
		var result = yield client.listBuckets();

		if(cb) cb(null, result.buckets);
	}).catch(function (err) {
		if(cb) cb(err);
	});
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
	co(function* () {
		var result = yield client.put(dest, source);
		
		if(cb) cb(null, result);
	}).catch(function (err) {
		if(cb) cb(err);
	});
};

/**
 * uploadFileSync
 * 上传文件，同步方式
 * 	client
 * 	dest，目标路径
 * 	source，待上传文件路径
 * 
 * return rs
 */
exports.uploadFileSync = function(client, dest, source){
	return new Promise(function(resolve, reject){
		exports.uploadFile(client, dest, source, function(err, rs){
			return err ? reject(err) : resolve(rs);
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
	try{
		var paths = [];
		getPathsFromFolder(sourceFolder, paths);
		console.log('begin upload ' + paths.length + ' files');
		console.log();
		
		var allFiles = [];
		var sucFiles = [];
		var failFiles= [];
		
		co(function* () {
			for(var i=0; i<paths.length; i++){
				var path = paths[i];
				var dest = destFolder + path.substr(sourceFolder.length);
				
				var result = yield client.put(dest, path);
				allFiles.push(result);

				if(result && result.res && result.res.status == 200){
					sucFiles.push(result);
				}else{
					failFiles.push(result);
				}
			}
			
			var obj = {};
			obj.paths 	= paths;
			obj.all		= allFiles;
			obj.suc		= sucFiles;
			obj.fail	= failFiles;
			
			if(cb) cb(null, obj);
		}).catch(function (err) {
			if(cb) cb(err);
		});
	}catch(e){
		if(cb) cb(e);
	}
};

/**
 * uploadFolderSync
 * 上传文件夹，同步方式
 * 	client
 * 	destFolder，目标路径，末尾不要添加/
 * 	sourceFolder，待上传的文件夹，末尾不要加/
 * 
 * return rs
 */
exports.uploadFolderSync = function(client, destFolder, sourceFolder){
	return new Promise(function(resolve, reject){
		exports.uploadFolder(client, destFolder, sourceFolder, function(err, rs){
			return err ? reject(err) : resolve(rs);
		});
	});
};

// get paths from folder
function getPathsFromFolder(root, list){
	var paths = fs.readdirSync(root);
	
	for(var i=0; i<paths.length; i++){
		var path = root + '/'  + paths[i];

		if(fs.statSync(path).isDirectory()){
			getPathsFromFolder(path, list);
		}else{
			list.push(path);
		}
	}
}