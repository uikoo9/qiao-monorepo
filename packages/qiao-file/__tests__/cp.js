'use strict';

var qiaoUtilFile = require('../qiao.util.file.js');

var test = function(){
	var folderPath 	= './test/';
	var filePath	= './qiao.util.file.js'

	// cp folder
	qiaoUtilFile.cp(folderPath, './test1');
		
	// cp file
	qiaoUtilFile.cp(filePath, './1.js');
};

test();