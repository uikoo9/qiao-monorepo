var qiaoPluginMysql = require('../lib/qiao.plugin.mysql.js');

var test = async function(){
	try{
		qiaoPluginMysql.poolInit(require('./_config.json'));
		
		var rows = await qiaoPluginMysql.poolQuery('select * from t_share_type where id=?', [1]);
		console.log(rows);
	}catch(e){
		console.log(e);
	}
};

test();