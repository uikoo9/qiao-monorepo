'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var q = require('qiao-ajax');
var i = require('ip-regex');

// urls
const hipUrl	= 'http://icanhazip.com/';
const hipErr 	= new Error('get ip by icanhazip failed');

// not ip
const notIpErr$1	= new Error('not ip');

/**
 * getIpByIcanhazip
 * @returns 
 */
const getIpByIcanhazip = () => {
	return new Promise(function(resolve, reject){
		q.get(hipUrl)
			.then(function(res){
				// not 200
				if(!res || res.status != 200 || !res.data){
					return reject(hipErr);
				}
	
				// ip
				const ip = res.data.replace(/\n/g, '');
				if(!ip) return reject(hipErr);
	
				const isIp = i.v4({exact: true}).test(ip);
				return isIp ? resolve(ip) : reject(notIpErr$1);
			})
			.catch(function(e){
				reject(e);
			});
	});
};

// urls
const sohuUrl = 'http://txt.go.sohu.com/ip/soip';
const sohuErr = new Error('get ip by sohu failed');

// not ip
const notIpErr= new Error('not ip');

/**
 * getIpBySohu
 * @returns 
 */
const getIpBySohu = () => {
	return new Promise(function(resolve, reject){
		q.get(sohuUrl)
			.then(function(res){
				// not 200
				if(!res || res.status != 200 || !res.data){
					return reject(sohuErr);
				}
	
				// ip
				const s 	= res.data.match(/\d+\.\d+\.\d+\.\d+/g);
				const ip 	= s && s.length ? s[0] : null;
				if(!ip) return reject(sohuErr);
	
				const isIp 	= i.v4({exact: true}).test(ip);
				return isIp ? resolve(ip) : reject(notIpErr);
			})
			.catch(function(e){
				reject(e);
			});
	});
};

/**
 * getIp
 * @returns 
 */
const getIp = async () => {
	let ip;
	
	// by sohu
	try{
		ip = await getIpBySohu();
	}catch(e1){
		// by icanhazip
		try{
			ip = await getIpByIcanhazip();
		}catch(e2){
			console.log(e1, e2);
		}
	}
	
	return ip;
};

exports.getIp = getIp;
exports.getIpByIcanhazip = getIpByIcanhazip;
exports.getIpBySohu = getIpBySohu;
