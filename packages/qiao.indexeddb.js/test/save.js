'use strict';

var qdb = require('../lib/qiao.indexeddb.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;
	var tables = [{
		name : 't_test1',
		key : 'id',
		index : {
			name : 'name',
			unique : false
		}
	},{
		name : 't_test2',
		key : 'auto',
		index : {
			name : 'email',
			unique : true
		}
	}];

	qdb.openDB(databaseName, version, function(db){
		var res = qdb.createTable(db, tables);
		console.log(res);
	});

	qdb.openDB(databaseName, version, null, function(db){
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.save(db, tableName, 1, data, function(r){
			console.log(r);

			data.name = '1';
			qdb.save(db, tableName, 1, data, function(rr){
				console.log(rr);
			});
		});
	});
};

test();