'use strict';

var qls = require('../lib/qiao.ls.js');

var test = function(){
	var name = 'name';
	var value = qls.getItem(name);
	console.log(value);
};

test();