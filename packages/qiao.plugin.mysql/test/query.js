'use strict';

var qiaoPluginMysql = require('../lib/qiao.plugin.mysql');

var test = async function(){
	qiaoPluginMysql.init(require('./config.json'));
	
	var res = await qiaoPluginMysql.query('show tables;');
	console.log(res);
};

test();