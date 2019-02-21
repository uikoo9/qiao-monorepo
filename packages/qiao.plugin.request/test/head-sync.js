'use strict';

var qiaoPluginRequest = require('../lib/qiao.plugin.request.js');

var test = async function(){
	try{
		var url = 'http://10.33.12.68:8002/head';
		var res = await qiaoPluginRequest.headSync({
			url	: url
		});
		
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();