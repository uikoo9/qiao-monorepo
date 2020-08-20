'use strict';

// qiao-ajax
var q = require('qiao-ajax');

// ip-regex
var i = require('ip-regex');

// urls
var sohuUrl = 'http://txt.go.sohu.com/ip/soip';
var sohuErr = new Error('get ip by sohu failed');

var hipUrl	= 'http://icanhazip.com/';
var hipErr 	= new Error('get ip by icanhazip failed');

// not ip
var notIpErr= new Error('not ip');

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
				if(!ip) return reject(sohuErr);

				var isIp = i.v4({exact: true}).test(ip);
				return isIp ? resolve(ip) : reject(notIpErr);
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

				// ip
				var ip 	= res.data.replace(/\n/g, '');
				if(!ip) return reject(hipErr);

				var isIp = i.v4({exact: true}).test(ip);
				return isIp ? resolve(ip) : reject(notIpErr);
			})
			.catch(function(e){
				reject(e);
			});
	});
};

/**
 * get ip
 */
exports.getIp = async function(){
	var ip;

	// by sohu
	try{
		ip = await exports.getIpBySohu();
	}catch(e1){
		// by icanhazip
		try{
			ip = await exports.getIpByIcanhazip();
		}catch(e2){
			console.log(e1, e2);
		}
	}

	return ip;
}