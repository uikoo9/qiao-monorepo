'use strict';

// get ip by sohu
var getIpBySohu = require('./get-ip-by-sohu.js');

// get ip by icanhazip
var getIpByIcanhazip = require('./get-ip-by-icanhazip.js');

// exports
module.exports = getIp;

/**
 * @returns {string} public ip
 */
async function getIp(){
	var ip;

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
}