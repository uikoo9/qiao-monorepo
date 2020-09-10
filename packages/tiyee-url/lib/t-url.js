'use strict';

// qiao-ajax
var q = require('qiao-ajax');

// urls
var turl = 'https://tiyee.cn/2/create_short_url';
var sohuErr = new Error('get ip by sohu failed');

// not ip
var notIpErr= new Error('not ip');

/**
 * url
 */
exports.url = function(longUrl){
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