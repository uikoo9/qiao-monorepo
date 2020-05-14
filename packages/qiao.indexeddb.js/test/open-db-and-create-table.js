'use strict';

var qdb = require('../lib/qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;
	var tables = [{
		name : 't_test1',
		key : 'id'
	},{
		name : 't_test2',
		key : 'auto'
	}];

	qdb.openDBAndCreateDB(databaseName, version, tables);
};

test();