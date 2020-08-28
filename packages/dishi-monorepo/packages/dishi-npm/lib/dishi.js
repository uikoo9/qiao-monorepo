'use strict';

// qiao
var qiao 	= {};
qiao.ajax	= require('./fetch.js');
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

	var url 	= config.host + config.login;
	var data	= {
		username: mobile,
		password: password
	};
	var json 	= await qiao.ajax.post(url, data);
	if(!json) return;

	var userinfo 	= json.obj;
	userinfo.mobile = mobile;
	qiao.config.set('userinfo', userinfo);
	qiao.log.suc(`${json.time}ms | login success`);
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
	var data	= {
		type	: 'reg',
		sign	: '济元祥',
		mobile	: mobile
	};
	var json 	= await qiao.ajax.post(url, data);
	if(!json) return;
	
	qiao.log.suc(`${json.time}ms | send code success`);
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
	var data	= {
		username : mobile,
		password : password,
		usercode : code
	};
	var json 	= await qiao.ajax.post(url, data);
	if(!json) return;
	
	qiao.log.suc(`${json.time}ms | register success`);
};

/**
 * list
 */
exports.list = async function(rows, group){
	var url = config.host + config.todoGrouplist;
	var data	= {
		username : mobile,
		password : password,
		usercode : code
	};
	var json 	= await qiao.ajax.post(url, data);
	if(!json) return;
	
	qiao.log.suc(`${time}ms | register success`);
};