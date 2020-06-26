'use strict';

var req = require('./req.js');

/**
 * ip
 */
exports.ip = async function(callback){
	var url = 'http://txt.go.sohu.com/ip/soip';
	req.get({url:url}, function(err, rs, body){
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