'use strict';

var qiaoPluginMysql = require('../lib/qiao.plugin.mysql.js');

var test = async function(){
	try{
		qiaoPluginMysql.poolInit(require('./_config.json'));
		
		var connection = await qiaoPluginMysql.poolConnection();
		console.log(connection);
	}catch(e){
		console.log(e);
	}
};

test();