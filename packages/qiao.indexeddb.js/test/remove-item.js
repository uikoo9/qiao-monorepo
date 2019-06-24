'use strict';

var qls = require('../lib/qiao.ls.js');

var test = function(){
	var name = 'name';
	qls.removeItem(name);

	var value = qls.getItem(name);
	console.log(value);
};

test();