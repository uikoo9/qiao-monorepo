'use strict';

var OSS = require('ali-oss');

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