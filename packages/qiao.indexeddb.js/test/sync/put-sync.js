'use strict';

var qdb = require('../../lib/qiao.indexeddb.js');

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

	qdb.openDB(databaseName, version, null, async function(db){
		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		var r = await qdb.addSync(db, tableName, data);
		if(!r) return;

		var rr = await qdb.putSync(db, tableName, data);
		console.log(rr);
	});
};

test();