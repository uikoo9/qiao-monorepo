'use strict';

var qdb = require('../../lib/qiao.indexeddb.js');

var test = async function(){
	var dbs = await qdb.listDBSync();
	console.log(dbs);
};

test();