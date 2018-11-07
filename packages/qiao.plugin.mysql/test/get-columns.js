'use strict';

var qiaoPluginMysql = require('../lib/qiao.plugin.mysql');

var test = async function(){
	try{
		var res = await qiaoPluginMysql.getColumns(require('./_config.json'), 't_share_type');
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();