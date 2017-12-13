'use strict';

var co	= require('co');
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

exports.addFile = function(client){
	co(function* () {
		var result = yield client.put('file', 'd:/test.js');
		console.log(result);
	}).catch(function (err) {
		console.log(err);
	});
};