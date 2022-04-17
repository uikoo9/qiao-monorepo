'use strict';

var qiaoUtilFile = require('../qiao.util.file.js');

var test = function(){
	var folderPath 	= './test copy/';
	var filePath	= './qiao.util.file copy.js'

	// rm folder
	qiaoUtilFile.rm(folderPath);
		
	// rm file
	qiaoUtilFile.rm(filePath);
};

test();