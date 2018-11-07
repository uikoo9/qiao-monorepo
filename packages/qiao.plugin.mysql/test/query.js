var util = require('../lib/qiao.plugin.mysql.js');

var test = async function(){
	try{
		var rows = await util.query(require('./_config.json'), 'select * from t_share_type where id=?', [1]);
		console.log(rows);
	}catch(e){
		console.log(e);
	}
};

test();