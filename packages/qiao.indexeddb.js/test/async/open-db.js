'use strict';

var qdb = require('../../lib/qiao.indexeddb.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;

	qdb.openDB(databaseName, version, function(db){
		console.log(db);
	}, function(db){
		console.log(db);
	});
};

test();