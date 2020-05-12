'use strict';

var qiaoPluginRequest = require('../lib/qiao.plugin.request.js');

var test = function(){
	var url = 'https://www.baidu.com/img/baidu_resultlogo@2.png';
	qiaoPluginRequest.imgToBase64(url, function(res){
		console.log(res);
	});
};

test();