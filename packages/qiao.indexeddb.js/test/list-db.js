'use strict';

var qdb = require('../lib/qiao.db.js');

var test = function(){
	qdb.listDB(function(dbs){
		console.log(dbs);
	});
};

test();