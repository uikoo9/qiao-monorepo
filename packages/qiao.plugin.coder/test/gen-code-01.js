'use strict';

var coder = require('../codes/01/_coder_01.js');

var test = function(){
	// vars
	var destFolder 	= 'd:/test';
	var tableName	= 't_share_type';
	
	coder.gen(destFolder, tableName);
};

test();