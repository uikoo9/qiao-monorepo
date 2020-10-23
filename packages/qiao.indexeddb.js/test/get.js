'use strict';

var qdb = require('../lib/qiao.indexeddb.js');

var test = async function(){
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

	try{
		var db 	= await qdb.openDB(databaseName, version);
		var res = qdb.createTable(db, tables);
		console.log(res);

		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		await qdb.save(db, tableName, data);
	}catch(e){
		console.log(e);
	}
};

test();