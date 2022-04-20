'use strict';

var q = require('../index.js');

var test = function(){
	var oldPath = './test';
	var newPath	= './test1'

	var res = q.mv(oldPath, newPath);
	console.log(res);
};

test();