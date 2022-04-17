'use strict';

var q = require('../index.js');

var test = function(){
	var folderPath 	= './test copy/';
	var filePath	= './qiao-file copy.js'

	// rm folder
	q.rm(folderPath);
		
	// rm file
	q.rm(filePath);
};

test();