'use strict';

var qdb = require('../lib/qiao.indexeddb.js');

var test = async function(){
	try{
		var databaseName = 'db_test';
		await qdb.delDB(databaseName);
	}catch(e){
		console.log(e);
	}
};

test();