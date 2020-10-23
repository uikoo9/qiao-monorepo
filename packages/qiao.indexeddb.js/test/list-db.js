'use strict';

var qdb = require('../lib/qiao.indexeddb.js');

var test = async function(){
	try{
		var dbs = await qdb.listDB();
		console.log(dbs);
	}catch(e){
		console.log(e);
	}
};

test();