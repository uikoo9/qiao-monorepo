'use strict';

var q = require('../index.js');

var test = async function(){
	try{
		q.poolInit(require('./_config.json'));
		
		var rows = await q.poolQuery('select * from t_todo_item where id=?', [8]);
		console.log(rows);
	}catch(e){
		console.log(e);
	}
};

test();