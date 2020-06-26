'use strict';

var qiaoPluginRequest = require('../lib/qiao.plugin.request.js');

var test = async function(){
	var s = await qiaoPluginRequest.isOnline();
	console.log(s);
};

test();