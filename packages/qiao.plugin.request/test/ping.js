'use strict';

var qiaoPluginRequest = require('../lib/qiao.plugin.request.js');

var test = function(){
	try{
		var hosts = ['www.baidu.com', 'www.google.com'];
		hosts.forEach(async function(host){
			var r = await qiaoPluginRequest.ping(host);
			console.log(r);
		});
	}catch(e){
		console.log(e);
	}
};

test();