'use strict';

var qiaoUtilFile = require('../qiao.util.file.js');

var test = function(){
	var folder = './test1/test2/test3/test.js';
	
	qiaoUtilFile.mkdir(folder);
};

test();