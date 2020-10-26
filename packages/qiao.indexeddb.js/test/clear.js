'use strict';

var qdb = require('../lib/qiao.indexeddb.js');

var test = async function(){
	var databaseName 	= 'db_test';
	var tableName		= 't_test1';

	try{
		var db = await qdb.openDB(databaseName);
		await qdb.clear(db, tableName);
	}catch(e){
		console.log(e);
	}
};

test();