'use strict';

var q = require('../index.js');

var test = function(){
	var oldPath = './test';
	var newPath	= './test1'

	q.mv(oldPath, newPath);
};

test();