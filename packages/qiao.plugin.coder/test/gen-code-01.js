'use strict';

var coder = require('../codes/01/coder.js');

var test = function(){
	// vars
	var destFolder 	= 'd:/test';
	var tableName	= 't_blog_type';
	
	coder.gen(destFolder, tableName);
};

test();