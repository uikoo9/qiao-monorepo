'use strict';

var qiaoUtilString = require('../lib/qiao.util.string.js');

var test = function(){
	var str = 'Table';
	var s	= qiaoUtilString.firstLetterLower(str);
	
	console.log(s);
};

test();