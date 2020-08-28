'use strict';

// qiao
var qiao 	= {};
qiao.ajax	= require('qiao-ajax');
qiao.log	= require('./log.js');

// config
var config 	= require('./config.json');

/**
 * login
 */
exports.login = async function(username, password){
	if(!username || !password){
		qiao.log.danger('need username and password');
		return;
	}

	var url = config.host + config.login;
	var options = {
		data: {
			username: username,
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

	qiao.log.suc(`${time}ms | login success`);
};
