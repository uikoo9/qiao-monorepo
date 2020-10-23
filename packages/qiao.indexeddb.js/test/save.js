'use strict';

var qdb = require('../lib/qiao.indexeddb.js');

var test = async function(){
	try{
		var databaseName = 'db_test';
		var version = 2;
		var db 	= await qdb.openDB(databaseName, version);

		var tableName = 't_test1';
		var data = { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' };
		await qdb.save(db, tableName, data);

		data.name = '1';
		await qdb.save(db, tableName, data);
	}catch(e){
		console.log(e);
	}
};

test();