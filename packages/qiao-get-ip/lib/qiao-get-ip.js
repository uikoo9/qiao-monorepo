'use strict';

var axios = require('axios');

/**
 * get ip by sohu
 */
exports.getIpBySohu = function(callback){
	var url = 'http://txt.go.sohu.com/ip/soip';
	return axios.get(url);


	return new Promise(function(resolve, reject){
		exports.request.get(options, function(err, rs, body){
			return err ? reject(err) : resolve(body);
		});
	});
};

			// var s = body.match(/\d+\.\d+\.\d+\.\d+/g);
			// var ip = s && s.length ? s[0] : null;
			// callback(null, ip);