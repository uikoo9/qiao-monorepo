'use strict';

var q = require('../index.js');

var test = function(){
	var fileTree = q.lstree('/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-file/', ['node_modules', 'is-']);
	console.log(JSON.stringify(fileTree));
};

test();