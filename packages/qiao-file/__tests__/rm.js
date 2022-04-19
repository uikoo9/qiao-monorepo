'use strict';

var q = require('../index.js');

var test = function(){
	var folderPath 	= './__tests__ copy/';
	var filePath	= './index copy.js'

	// rm folder
	q.rm(folderPath);
		
	// rm file
	q.rm(filePath);
};

test();