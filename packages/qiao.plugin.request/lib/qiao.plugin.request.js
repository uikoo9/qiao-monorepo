'use strict';

var reqwest = require('reqwest');
var request = require('request');

/**
 * ajax
 * 	options, https://www.npmjs.com/package/reqwest
 */
exports.ajax = function(options){
	if(typeof options != 'object'){
		console.log('only support options type!');
		return;
	}
	
	reqwest(options);
};

/**
 * ajax sync
 * 	options, https://www.npmjs.com/package/reqwest
 * 	and you dont need success or error function in options
 * 	and you must babel first in brower
 */
exports.ajaxSync = function(options){
	if(typeof options != 'object'){
		console.log('only support options type!');
		return;
	}
	
	return new Promise(function(resolve, reject){
		options.success = function(resp){
			resolve(resp);
		};
		options.error	= function(err){
			reject(err);
		};
		
		reqwest(options);
	});
};

/**
 * get
 * 	options,https://www.npmjs.com/package/request
 * 	callback
 */
exports.get = function(options, callback){
	request.get(options, function(err, rs, body){
		if(callback) callback(err, rs, body);
	});
};

/**
 * get sync
 * 	options,https://www.npmjs.com/package/request
 */
exports.getSync = function(options){
	return new Promise(function(resolve, reject){
		request.get(options, function(err, rs, body){
			return err ? reject(err) : resolve(body);
		});
	});
};

/**
 * post
 * 	options,https://www.npmjs.com/package/request
 * 	callback
 */
exports.post = function(options, callback){
	request.post(options, function(){
		if(callback) callback();
	});
};

/**
 * post sync
 * 	options,https://www.npmjs.com/package/request
 */
exports.postSync = function(options){
	return new Promise(function(resolve, reject){
		request.post(options, function(err, rs, body){
			return err ? reject(err) : resolve(body);
		});
	});
};