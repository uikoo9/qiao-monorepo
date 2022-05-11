'use strict';

var q = require('../index.js');

var test = function(){
	var str = 'table';
	var s	= q.firstLetterUpper(str);
	
	console.log(s);
};

test();