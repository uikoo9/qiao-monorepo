'use strict';

var qiaoUtilString = require('../lib/qiao.util.string');

var test = function(){
	var underScoreCaseName 	= 't_blog_type';
	var camelCaseName		= qiaoUtilString.underScoreCaseToCamelCase(underScoreCaseName);
	
	console.log(camelCaseName);
};

test();