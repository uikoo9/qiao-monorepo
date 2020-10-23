'use strict';

var qdb = require('../lib/qiao.indexeddb.js');

var test = async function(){
	try{
		var databaseName = 'db_test';
		var version = 1;
	
		var db = await qdb.openDB(databaseName, version);
		console.log(db);
	}catch(e){
		console.log(e);
	}
};

test();