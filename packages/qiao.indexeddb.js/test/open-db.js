'use strict';

var qdb = require('../lib/qiao.indexeddb.js');

var test = async function(){
	var databaseName = 'db_test';
	var version = 1;

	var db = await qdb.openDB(databaseName, version);
	console.log(db);
};

test();