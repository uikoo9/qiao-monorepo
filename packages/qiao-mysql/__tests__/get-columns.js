'use strict';

var q = require('../index.js');

var test = async function(){
	try{
		var res = await q.getColumns(require('./_config.json'), 't_todo_item');
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();