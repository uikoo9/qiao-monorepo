'use strict';

// cos
var COS 	= require('cos-nodejs-sdk-v5');

// qiao
var qiao 	= {};
qiao.cli	= require('qiao.plugin.cli');
qiao.file	= require('qiao.util.file');

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