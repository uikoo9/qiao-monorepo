'use strict';

var fs		= require('fs');
var request = require('request');

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
	request.post(options, function(err, rs, body){
		if(callback) callback(err, rs, body);
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

/**
 * download
 * 	url
 * 	path
 */
exports.download = function(url, path){
	return new Promise(function(resolve, reject){
		request.head(url, function(err, rs, body){
			if(err){
				reject(err);
				return;
			}
			if(rs.statusCode != 200){
				reject('status code not 200');
				return;
			}
			
			request(url).pipe(fs.createWriteStream(path));
			resolve();
		});
	});
};