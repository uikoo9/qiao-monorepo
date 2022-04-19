'use strict';

var q = require('../index.js');

var test = function(){
	var filePath 	= './index.js';
	var s 			= q.readFile(filePath);
	
	console.log(s);
};

test();