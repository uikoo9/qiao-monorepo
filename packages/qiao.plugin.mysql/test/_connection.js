'use strict';

var qiaoPluginMysql = require('../lib/qiao.plugin.mysql');

var test = async function(){
	qiaoPluginMysql.init(require('./_config.json'));
	
	var con = await qiaoPluginMysql.con();
	console.log(con);
};

test();