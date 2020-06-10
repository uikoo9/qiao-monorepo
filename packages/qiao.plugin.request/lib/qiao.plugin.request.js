'use strict';

var fs 		= require('fs');
var path	= require('path');
var ping 	= require('ping');

/**
 * reuqest
 */
exports.request = require('qiao.plugin.requestfix');

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
 * patch
 * 	options,https://www.npmjs.com/package/request
 * 	callback
 */
exports.patch = function(options, callback){
	exports.request.patch(options, function(err, rs, body){
		if(callback) callback(err, rs, body);
	});
};

/**
 * patch sync
 * 	options,https://www.npmjs.com/package/request
 */
exports.patchSync = function(options){
	return new Promise(function(resolve, reject){
		exports.request.patch(options, function(err, rs, body){
			return err ? reject(err) : resolve(body);
		});
	});
};

/**
 * delete
 * 	options,https://www.npmjs.com/package/request
 * 	callback
 */
exports.delete = function(options, callback){
	exports.request.delete(options, function(err, rs, body){
		if(callback) callback(err, rs, body);
	});
};

/**
 * delete sync
 * 	options,https://www.npmjs.com/package/request
 */
exports.deleteSync = function(options){
	return new Promise(function(resolve, reject){
		exports.request.delete(options, function(err, rs, body){
			return err ? reject(err) : resolve(body);
		});
	});
};

/**
 * head
 * 	options,https://www.npmjs.com/package/request
 * 	callback
 */
exports.head = function(options, callback){
	exports.request.head(options, function(err, rs, body){
		if(callback) callback(err, rs, body);
	});
};

/**
 * head sync
 * 	options,https://www.npmjs.com/package/request
 */
exports.headSync = function(options){
	return new Promise(function(resolve, reject){
		exports.request.head(options, function(err, rs, body){
			return err ? reject(err) : resolve(rs.headers);
		});
	});
};

/**
 * options
 * 	options,https://www.npmjs.com/package/request
 * 	callback
 */
exports.options = function(options, callback){
	exports.request.options(options, function(err, rs, body){
		if(callback) callback(err, rs, body);
	});
};

/**
 * options sync
 * 	options,https://www.npmjs.com/package/request
 */
exports.optionsSync = function(options){
	return new Promise(function(resolve, reject){
		exports.request.options(options, function(err, rs, body){
			return err ? reject(err) : resolve(body);
		});
	});
};

/**
 * img to base64
 */
exports.imgToBase64 = function(url, cb){
	var res = {};
	res.url = url;

	if(!url){
		res.type = 'fail';
		res.msg = 'need url';

		cb(res);
		return;
	}

	var type;
	var ext = path.extname(url).toLowerCase();
	if(ext == '.gif') type = 'gif';
	if(ext == '.png') type = 'png';
	if(ext == '.jpg' || ext == '.jpeg') type = 'jpeg';
	if(!type){
		res.type = 'fail';
		res.msg = 'only gif,png,jpg';

		cb(res);
		return;
	}

	exports.get({
		url: url,
		encoding: null
	}, function(err, rs, body){
		if(err){
			res.type = 'fail';
			res.msg = err;
	
			cb(res);
			return;
		}
		if(rs.statusCode != 200){
			res.type = 'fail';
			res.msg = 'status code not 200';
	
			cb(res);
			return;
		}

		var base64 = body.toString('base64');
		res.type = 'suc';
		res.msg = `data:image/${type};base64,${base64}`;

		cb(res);
		return;
	});
};

/**
 * img to base64 sync
 */
exports.imgToBase64Sync = function(url){
	return new Promise(function(resolve, reject){
		exports.imgToBase64(url, function(res){
			return resolve(res);
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

/**
 * ping
 * 	host
 * 	options,https://www.npmjs.com/package/ping
 */
exports.ping = function(host, options){
	if(!host){
		console.log('need host');
		return;
	}

	var opt = options || {timeout:4};
	return new Promise(function(resolve, reject){
		ping.promise.probe(host, opt).then(function(res){return resolve(res);});
	});
};

/**
 * ip
 */
exports.ip = async function(callback){
	var url = 'http://txt.go.sohu.com/ip/soip';
	exports.get({url:url}, function(err, rs, body){
		if(err){
			callback(err);
			return;
		}

		var s = body.match(/\d+\.\d+\.\d+\.\d+/g);
		var ip = s && s.length ? s[0] : null;
		callback(null, ip);
	});
};

/**
 * ip sync
 */
exports.ipSync = async function(){
	return new Promise(function(resolve, reject){
		exports.ip(function(err, ip){
			return err ? reject(err) : resolve(ip);
		});
	});
};

/**
 * get ip
 */
exports.getIp = async function(){
	var ip = null;
	try{
		ip = await exports.ipSync();
	}catch(e){
	}

	return ip;
};
