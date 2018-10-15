'use strict';

var qiaoPluginCoder = require('../lib/qiao.plugin.coder');

var test = function(){
	var tableName = 't_blog_type';
	var className = qiaoPluginCoder.tableNameToClassName(tableName);
	
	console.log(className);
};

test();