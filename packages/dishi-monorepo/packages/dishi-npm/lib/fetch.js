'use strict';

// qiao
var qiao 	= {};
qiao.ajax	= require('qiao-ajax');
qiao.config	= require('qiao-config');
qiao.log	= require('./log.js');

/**
 * post
 *  url
 *  data
 */
exports.post = async function(url, data){
	return await ajax(url, data);
};

/**
 * post
 *  url
 *  data
 */
exports.postWithToken = async function(url, data){
	var userinfo = qiao.config.get('userinfo');
	if(!userinfo || !userinfo.userid || !userinfo.usertoken){
		qiao.log.danger(`please login first`);
		return;
	}

	var headers = {
		userid 		: userinfo.userid,
		usertoken	: userinfo.usertoken
	};
	return await ajax(url, data, headers);
};

// ajax
async function ajax(url, data, headers){
	var options = {data: data};
	if(headers){
		options.headers = headers;
		options.data['ucenterUserId'] = headers.userid;
	}

	var s       = Date.now();
	var res     = await qiao.ajax.post(url, options);
	var time    = Date.now() - s;

	if(res.status != 200){
		qiao.log.danger(`${time}ms | request fail: ${res.status}`);
		return;
	}

	var json = res.data;
	if(!json){
		qiao.log.danger(`${time}ms | request fail: no data`);
		return;
	}
	if(json.type == 'danger'){
		qiao.log.danger(`${time}ms | ${json.msg}`);
		return;
	}

	json.time = time;
    return json;
}