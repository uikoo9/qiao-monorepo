'use strict';

var q = require('../index.js');

var test = async function(){
	var databaseName 	= 'db_test';
	var tableName		= 't_test1';
	var indexName		= 'name'

	try{
		var db 	= await q.openDB(databaseName);
		var s 	= await q.igetAll(db, tableName, indexName);
		console.log(s);
	}catch(e){
		console.log(e);
	}
};

test();