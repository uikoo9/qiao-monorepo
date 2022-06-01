'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var qiaoAjax = require('qiao-ajax');
var qiaoJson = require('qiao-json');

var host = "https://insistime.com/";
var login$1 = "ucenter/user/login";
var sendCode$1 = "ucenter/code/send";
var register$1 = "ucenter/user/reg";
var config = {
	host: host,
	login: login$1,
	sendCode: sendCode$1,
	register: register$1
};

// qiao

/**
 * post
 *  url
 *  data
 */
const post = async (url, data) => {
	return await ajax(url, data);
};

// ajax
async function ajax(url, data, headers){
	let options = {data: data};
	if(headers) options.headers = headers;

	const s = Date.now();
	let res;
	try{
		res = await qiaoAjax.post(url, options);
	}catch(e){
	}
	const time = Date.now() - s;

	// res error
	if(!res){
		qiaoJson.danger(`${time}ms | request fail`);
		return;
	}

	// not 200
	if(res.status != 200){
		qiaoJson.danger(`${time}ms | request fail: ${res.status}`);
		return;
	}

	// no data
	const json = res.data;
	if(!json){
		qiaoJson.danger(`${time}ms | request fail: no data`);
		return;
	}

	// danger
	if(json.type == 'danger'){
		qiaoJson.danger(`${time}ms | ${json.msg}`);
		return;
	}

	json.time = time;
    return json;
}

/**
 * login
 * @param {*} mobile 
 * @param {*} password 
 * @returns 
 */
const login = async (mobile, password) => {
	if(!mobile || !password){
		qiaoJson.danger('need mobile and password');
		return;
	}

	const url 	= config.host + config.login;
	const data	= {
		username: mobile,
		password: password
	};
	
	return await post(url, data);
};

/**
 * sendCode
 * @param {*} mobile 
 * @returns 
 */
const sendCode = async (mobile) => {
	if(!mobile){
		qiaoJson.danger('need mobile');
		return;
	}

	const url 	= config.host + config.sendCode;
	const data	= {
		type	: 'reg',
		sign	: '坚时科技',
		mobile	: mobile
	};

	return await post(url, data);
};

/**
 * register
 * @param {*} mobile 
 * @param {*} password 
 * @param {*} repassword 
 * @param {*} code 
 * @returns 
 */
const register = async (mobile, password, repassword, code) => {
	if(!mobile || !password || !repassword || !code){
		qiaoJson.danger('need mobile, code, password');
		return;
	}
	if(password != repassword){
		qiaoJson.danger('the two password do not match');
		return;
	}

	const url 	= config.host + config.register;
	const data	= {
		username : mobile,
		password : password,
		usercode : code
	};

	return await post(url, data);
};

exports.login = login;
exports.register = register;
exports.sendCode = sendCode;
