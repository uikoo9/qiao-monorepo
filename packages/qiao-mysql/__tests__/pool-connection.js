'use strict';

var q = require('../index.js');

var test = async function(){
	try{
		q.poolInit(require('./_config.json'));
		
		var connection = await q.poolConnection();
		console.log(connection);
	}catch(e){
		console.log(e);
	}
};

test();