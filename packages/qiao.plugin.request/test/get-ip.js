'use strict';

var qiaoPluginRequest = require('../lib/qiao.plugin.request.js');

var test = async function(){
	var ip = await qiaoPluginRequest.getIp();
	console.log(ip);
};

test();