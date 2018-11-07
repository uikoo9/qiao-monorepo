var util = require('../lib/qiao.plugin.mysql.js');

var test = async function(){
	try{
		var connection = await util.connection(require('./_config.json'));
		console.log(connection);
	}catch(e){
		console.log(e);
	}
};

test();