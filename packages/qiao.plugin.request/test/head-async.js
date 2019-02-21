'use strict';

var qiaoPluginRequest = require('../lib/qiao.plugin.request.js');

var test = function(){
	var url = 'http://10.33.12.68:8002/head';
	qiaoPluginRequest.head({
		url	: url
	}, function(err, rs, body){
		console.log(err, rs.headers);
	});
};

test();