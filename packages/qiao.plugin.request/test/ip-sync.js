'use strict';

var qiaoPluginRequest = require('../lib/qiao.plugin.request.js');

var test = async function(){
	try{
		var ip = await qiaoPluginRequest.ipSync();
		console.log(ip);
	}catch(e){
		console.log(e);
	}
};

test();