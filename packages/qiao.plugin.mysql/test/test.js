var util = require('../lib/qiao.plugin.mysql.js');

var test = async function(){
	try{
		var s = await util.query(require('./_config.json'), 'select * from t_share_type');
//		console.log(s);
	}catch(e){
		console.log(e);
	}
};

test();