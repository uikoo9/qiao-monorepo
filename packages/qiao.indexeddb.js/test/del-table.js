'use strict';

var qdb = require('../lib/qiao.indexeddb.js');

var test = async function(){
	try{
		var databaseName	= 'db_test';
		var version 		= 3;

		var db = await qdb.openDB(databaseName, version);
		qdb.delTable(db, 't_test2');
	}catch(e){
		console.log(e);
	}
};

test();