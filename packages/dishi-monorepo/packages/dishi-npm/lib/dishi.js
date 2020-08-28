'use strict';

// qiao
var qiao 	= {};
qiao.ajax	= require('qiao-ajax');
qiao.config	= require('qiao-config');
qiao.log	= require('./log.js');

// config
var config 	= require('./config.json');

/**
 * login
 */
exports.login = async function(mobile, password){
	if(!mobile || !password){
		qiao.log.danger('need mobile and password');
		return;
	}

	var url = config.host + config.login;
	var options = {
		data: {
			username: mobile,
			password: password
		}
	};

	var s = Date.now();
	var res = await qiao.ajax.post(url, options);
	var time = Date.now() - s;

	if(res.status != 200){
		qiao.log.danger(`${time}ms | request fail: ${res.status}`);
		return;
	}

	var data = res.data;
	if(!data){
		qiao.log.danger(`${time}ms | request fail: no data`);
		return;
	}
	if(data.type == 'danger'){
		qiao.log.danger(`${time}ms | ${data.msg}`);
		return;
	}

	var userinfo 	= data.obj;
	userinfo.mobile = mobile;
	qiao.config.set('userinfo', userinfo);
	qiao.log.suc(`${time}ms | login success`);
};

/**
 * sendCode
 */
exports.sendCode = async function(mobile){
	if(!mobile){
		qiao.log.danger('need mobile');
		return;
	}

	var url = config.host + config.sendCode;
	var options = {
		data: {
			type	: 'reg',
			sign	: '济元祥',
			mobile	: mobile
		}
	};

	var s = Date.now();
	var res = await qiao.ajax.post(url, options);
	var time = Date.now() - s;

	if(res.status != 200){
		qiao.log.danger(`${time}ms | request fail: ${res.status}`);
		return;
	}

	var data = res.data;
	if(!data){
		qiao.log.danger(`${time}ms | request fail: no data`);
		return;
	}
	if(data.type == 'danger'){
		qiao.log.danger(`${time}ms | ${data.msg}`);
		return;
	}
	
	qiao.log.suc(`${time}ms | send code success`);
	return true;
};

/**
 * register
 */
exports.register = async function(mobile, password, repassword, code){
	if(!mobile || !password || !repassword || !code){
		qiao.log.danger('need mobile, code, password');
		return;
	}
	if(password != repassword){
		qiao.log.danger('the two password do not match');
		return;
	}

	var url = config.host + config.register;
	var options = {
		data: {
			username : mobile,
			password : password,
			usercode : code
		}
	};

	var s = Date.now();
	var res = await qiao.ajax.post(url, options);
	var time = Date.now() - s;

	if(res.status != 200){
		qiao.log.danger(`${time}ms | request fail: ${res.status}`);
		return;
	}

	var data = res.data;
	if(!data){
		qiao.log.danger(`${time}ms | request fail: no data`);
		return;
	}
	if(data.type == 'danger'){
		qiao.log.danger(`${time}ms | ${data.msg}`);
		return;
	}
	
	qiao.log.suc(`${time}ms | register success`);
};