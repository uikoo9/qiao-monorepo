'use strict';

var qiaoPluginMysql = require('../lib/qiao.ext.txsms.js');

var test = async function(){
	try{
		var rows = await qiaoPluginMysql.query(require('./_config.json'), 'select * from t_share_type where id=?', [1]);
		console.log(rows);
	}catch(e){
		console.log(e);
	}
};

test();