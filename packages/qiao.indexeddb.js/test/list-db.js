'use strict';

var qdb = require('../lib/qiao.indexeddb.js');

var test = function(){
	qdb.listDB(function(dbs){
		console.log(dbs);
	});
};

test();