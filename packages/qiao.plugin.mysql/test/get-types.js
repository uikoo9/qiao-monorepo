'use strict';

var qiaoPluginMysql = require('../lib/qiao.plugin.mysql');

var test = async function(){
	var type = qiaoPluginMysql.getTypes('varchar(10)');
	console.log(type);
};

test();