'use strict';

var q = require('../index.js');

var test = function(){
	var str = 'share_type';
	var s	= q.underScoreCaseToCamelCase(str);
	
	console.log(s);
};

test();