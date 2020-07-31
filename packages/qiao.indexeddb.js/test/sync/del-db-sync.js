'use strict';

var qdb = require('../../lib/qiao.indexeddb.js');

var test = async function(){
	var databaseName = 'db_test';
	var res = await qdb.delDBSync(databaseName);
	console.log(res);
};

test();