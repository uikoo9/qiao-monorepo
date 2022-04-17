'use strict';

var q = require('../index.js');

var test = function(){
	var folder = './test1/test2/test3/test.js';
	
	q.mkdir(folder);
};

test();