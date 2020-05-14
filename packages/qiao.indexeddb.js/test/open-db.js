'use strict';

var qdb = require('../lib/qiao.db.js');

var test = function(){
	var databaseName = 'db_test';
	var version = 1;

	qdb.openDB(databaseName, version, function(ev){
		console.log(ev ? ev.target.result : ev);
	});
};

test();