'use strict';

// qiao
var qiao 	= {};
qiao.ajax	= require('qiao-ajax');
qiao.log	= require('./log.js');

/**
 * post
 *  url
 *  data
 */
exports.post = async function(url, data){
	var options = {data: data};

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
};