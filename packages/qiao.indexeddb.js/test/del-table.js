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

		qdb.delTable(ev.target.result, 't_test1');
	});
};

test();