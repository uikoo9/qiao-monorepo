'use strict';

// config
var config = require('../config.json');

// fetch
var fetch = require('../util/fetch.js');

// log
var log = require('../util/log.js');

/**
 * login
 */
exports.login = async function(mobile, password){
	if(!mobile || !password){
		log.danger('need mobile and password');
		return;
	}

	var url 	= config.host + config.login;
	var data	= {
		username: mobile,
		password: password
	};
	
	return await fetch.post(url, data);
};

/**
 * sendCode
 */
exports.sendCode = async function(mobile){
	if(!mobile){
		log.danger('need mobile');
		return;
	}

	var url 	= config.host + config.sendCode;
	var data	= {
		type	: 'reg',
		sign	: '济元祥',
		mobile	: mobile
	};

	return await fetch.post(url, data);
};

/**
 * register
 */
exports.register = async function(mobile, password, repassword, code){
	if(!mobile || !password || !repassword || !code){
		log.danger('need mobile, code, password');
		return;
	}
	if(password != repassword){
		log.danger('the two password do not match');
		return;
	}

	var url 	= config.host + config.register;
	var data	= {
		username : mobile,
		password : password,
		usercode : code
	};

	return await fetch.post(url, data);
};