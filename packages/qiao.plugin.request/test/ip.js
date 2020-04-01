'use strict';

var qiaoPluginRequest = require('../lib/qiao.plugin.request.js');

var test = function(){
	qiaoPluginRequest.ip(function(err, ip){
		console.log(err, ip);
	});
};

test();