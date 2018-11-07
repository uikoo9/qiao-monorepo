'use strict';

var qiaoUtilString = require('../lib/qiao.util.string.js');

var test = function(){
	var str = 'share_type';
	var s	= qiaoUtilString.underScoreCaseToCamelCase(str);
	
	console.log(s);
};

test();