'use strict';

var q = require('../index.js');

var test = function(){
	var filePath 	= 'd:/test1/test2/test.js';
	var s 			= q.extname(filePath);
	
	console.log(s);
};

test();