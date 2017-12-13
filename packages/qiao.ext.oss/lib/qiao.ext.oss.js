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
 * 	cb
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
 * 	cb
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
 * uploadFolder
 * 上传文件夹
 * 	client
 * 	destFolder，目标路径，末尾不要添加/
 * 	sourceFolder，待上传的文件夹，末尾不要加/
 * 	cb
 */
exports.uploadFolder = function(client, destFolder, sourceFolder, cb){
	var paths = [];
	try{
		getPathsFromFolder(sourceFolder, paths);
	}catch(e){
		if(cb) cb(e);
	}

	co(function* () {
		var rs = [];
		for(var i=0; i<paths.length; i++){
			var path = paths[i];
			var dest = destFolder + path.substr(sourceFolder.length);
			
			var result = yield client.put(dest, path);
			rs.push(result);
		}
		
		if(cb) cb(null, rs);
	}).catch(function (err) {
		if(cb) cb(err);
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