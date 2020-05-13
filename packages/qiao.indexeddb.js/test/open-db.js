'use strict';

var qdb = require('../lib/qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;

	qdb.openDB(databaseName, version, function(db){
		console.log(db);
	});
};

test();