'use strict';

var qdb = require('../lib/qiao.db.js');

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

	qdb.openDB(databaseName, version, function(ev){
		if(!ev) return;

		var res = qdb.createTable(ev.target.result, tables);
		console.log(res);

		var tx = ev.target.transaction;
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		qdb.add(tx, tableName, data, function(r){
			if(!r) return;

			data.name = '1';
			qdb.put(tx, tableName, data, function(rr){
				console.log(rr);
			});
		});
	});
};

test();