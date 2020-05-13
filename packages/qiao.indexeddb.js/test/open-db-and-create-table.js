'use strict';

var qdb = require('../lib/qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;
	var tables = [{
		name : 't_test1',
		key : {keyPath : 'id'}
	},{
		name : 't_test2',
		key : {keyPath : 'id'}
	}];

	qdb.openDBAndCreateDB(databaseName, version, tables);
};

test();