'use strict';

var qiaoPluginCoder = require('../lib/qiao.plugin.coder');

var test = function(){
	// vars
	var destFolder 	= 'z:/workspaces/fe.100tal/webroot-dev';
	var tableName	= 't_share_type';
	
	qiaoPluginCoder.genServerCode(destFolder, tableName);
};

test();