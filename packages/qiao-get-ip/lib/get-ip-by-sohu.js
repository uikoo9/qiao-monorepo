'use strict';

// qiao-ajax
var q = require('qiao-ajax');

// ip-regex
var i = require('ip-regex');

// urls
var sohuUrl = 'http://txt.go.sohu.com/ip/soip';
var sohuErr = new Error('get ip by sohu failed');

// not ip
var notIpErr= new Error('not ip');

// exports
module.exports = getIpBySohu;

/**
 * @returns {string} public ip
 */
function getIpBySohu(){
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
}