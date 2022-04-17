'use strict';

var qiaoUtilFile = require('../qiao.util.file.js');

var test = function(){
	var filePath 	= 'd:/test1/test2/test.js';
	var s 			= qiaoUtilFile.extname(filePath);
	
	console.log(s);
};

test();