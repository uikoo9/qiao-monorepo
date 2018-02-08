'use strict';

var qiaoPluginRequest = require('../lib/qiao.plugin.request');

var test = async function(){
	try{
		var url = 'http://www.baidu.com';
		var res = await qiaoPluginRequest.getSync({
			url	: url,
			qs	: {
				test : 'test'
			}
		});
		
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();