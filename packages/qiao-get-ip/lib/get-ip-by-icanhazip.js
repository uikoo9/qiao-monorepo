'use strict';

// qiao-ajax
var q = require('qiao-ajax');

// ip-regex
var i = require('ip-regex');

// urls
var hipUrl	= 'http://icanhazip.com/';
var hipErr 	= new Error('get ip by icanhazip failed');

// not ip
var notIpErr= new Error('not ip');

// exports
module.exports = getIpByIcanhazip;

/**
 * @returns {string} public ip
 */
function getIpByIcanhazip(){
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
}