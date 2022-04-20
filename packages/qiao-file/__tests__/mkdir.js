'use strict';

var q = require('../index.js');

var test = function(){
	var folder = '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-file/2/3/4/';
	
	var res = q.mkdir(folder);
	console.log(res);
};

test();