'use strict';

var q = require('../index.js');

var test = async function(){
	try{
		var rows = await q.query(require('./_config.json'), 'select * from t_todo_item where id=?', [8]);
		console.log(rows);
	}catch(e){
		console.log(e);
	}
};

test();