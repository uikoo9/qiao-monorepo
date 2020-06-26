'use strict';

var ping = require('ping');

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