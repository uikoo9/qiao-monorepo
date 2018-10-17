'use strict';

var qiaoUtilString	= require('../util/qiao.util.string');
var qiaoPluginCoder = require('../lib/qiao.plugin.coder');
var qiaoPluginMysql = require('qiao.plugin.mysql');

var test = async function(){
	// vars
	var destFolder 	= 'z:/workspaces/fe.100tal/webroot-dev';
	var tableName	= 't_share_type';
	
	qiaoPluginCoder.genServerCode(destFolder, tableName);
};

test();