'use strict';

var qiaoPluginRequest = require('../lib/qiao.plugin.request.js');

var test = async function(){
	try{
		var url 	= 'https://www.baidu.com/img/bd_logo1.png';
		var path	= 'd:/test.png';
		
		await qiaoPluginRequest.download(url, path);
	}catch(e){
		console.log(e);
	}
};

test();