'use strict';

// qiao-ajax
var q = require('qiao-ajax');

// urls
var sohuUrl = 'http://txt.go.sohu.com/ip/soip';
var sohuErr = new Error('get ip by sohu failed');

var hipUrl	= 'http://icanhazip.com/';
var hipErr 	= new Error('get ip by icanhazip failed');

/**
 * get ip by sohu
 */
exports.getIpBySohu = function(){
	return new Promise(function(resolve, reject){
		q.get(sohuUrl)
			.then(function(res){
				// not 200
				if(!res || res.status != 200 || !res.data){
					return reject(sohuErr);
				}

				// ip
				var s 	= res.data.match(/\d+\.\d+\.\d+\.\d+/g);
				var ip 	= s && s.length ? s[0] : null;

				return ip ? resolve(ip) : reject(sohuErr);
			})
			.catch(function(e){
				reject(e);
			});
	});
};

/**
 * get ip by icanhazip
 */
exports.getIpByIcanhazip = function(){
	return new Promise(function(resolve, reject){
		q.get(hipUrl)
			.then(function(res){
				// not 200
				if(!res || res.status != 200 || !res.data){
					return reject(hipErr);
				}

				resolve(res);
				// return ip ? resolve(ip) : reject(sohuErr);
			})
			.catch(function(e){
				reject(e);
			});
	});
};