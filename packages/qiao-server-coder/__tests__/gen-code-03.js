'use strict';

var coder = require('../codes/03/coder.js');

var test = function(){
	// vars
	var tableName	= 't_todo_group';
	var destFolder 	= '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/insistime-web';
	
	coder.gen(tableName, destFolder);
};

test();