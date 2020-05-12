'use strict';

var qiaoPluginRequest = require('../lib/qiao.plugin.request.js');

var test = async function(){
	try{
        var url = 'https://www.baidu.com/img/baidu_resultlogo@2.png';
		var res = await qiaoPluginRequest.imgToBase64(url);
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();