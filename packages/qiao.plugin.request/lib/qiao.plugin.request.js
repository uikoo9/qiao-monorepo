'use strict';

var fs = require('fs');

/**
 * reuqest
 */
exports.request = require('request');

/**
 * get
 * 	options,https://www.npmjs.com/package/request
 * 	callback
 */
exports.get = function(options, callback){
	exports.request.get(options, function(err, rs, body){
		if(callback) callback(err, rs, body);
	});
};

/**
 * get sync
 * 	options,https://www.npmjs.com/package/request
 */
exports.getSync = function(options){
	return new Promise(function(resolve, reject){
		exports.request.get(options, function(err, rs, body){
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
	exports.request.post(options, function(err, rs, body){
		if(callback) callback(err, rs, body);
	});
};

/**
 * post sync
 * 	options,https://www.npmjs.com/package/request
 */
exports.postSync = function(options){
	return new Promise(function(resolve, reject){
		exports.request.post(options, function(err, rs, body){
			return err ? reject(err) : resolve(body);
		});
	});
};

/**
 * put
 * 	options,https://www.npmjs.com/package/request
 * 	callback
 */
exports.put = function(options, callback){
	exports.request.put(options, function(err, rs, body){
		if(callback) callback(err, rs, body);
	});
};

/**
 * put sync
 * 	options,https://www.npmjs.com/package/request
 */
exports.putSync = function(options){
	return new Promise(function(resolve, reject){
		exports.request.put(options, function(err, rs, body){
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
		exports.request.head(url, function(err, rs, body){
			if(err){
				reject(err);
				return;
			}
			if(rs.statusCode != 200){
				reject('status code not 200');
				return;
			}
			
			exports.request(url).pipe(fs.createWriteStream(path).on('finish', function(){
				resolve();
			}));
		});
	});
};