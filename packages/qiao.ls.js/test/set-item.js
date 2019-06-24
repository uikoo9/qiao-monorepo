'use strict';

var qls = require('../lib/qiao.ls.js');

var test = function(){
	var name = 'name';
	var value = 'value';
	qls.setItem(name, value);

	var expires = 1;
	qls.setItem(name, value, expires);
};

test();