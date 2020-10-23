'use strict';

var qdb = require('../lib/qiao.indexeddb.js');

var test = async function(){
	var dbs = await qdb.listDB();
	console.log(dbs);
};

test();