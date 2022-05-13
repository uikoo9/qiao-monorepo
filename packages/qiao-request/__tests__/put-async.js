'use strict';

var q = require('../index.js');

var test = function(){
	var url = 'http://10.33.12.68:8002/put';
	q.put({
		url	: url
	}, function(err, rs, body){
		console.log(err, body);
	});
};

test();