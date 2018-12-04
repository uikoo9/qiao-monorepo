'use strict';

var coder = require('../codes/02/_coder_02.js');

var test = function(){
	// vars
	var destFolder 	= 'd:/test';
	var tableName	= 't_home_user';
	
	coder.gen(destFolder, tableName);
};

test();