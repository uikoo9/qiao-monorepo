'use strict';

var qiaoUtilString = require('../lib/qiao.util.string.js');

var test = function(){
	var str = 'table';
	var s	= qiaoUtilString.firstLetterUpper(str);
	
	console.log(s);
};

test();