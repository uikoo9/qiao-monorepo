'use strict';

var q = require('../index.js');

var test = function(){
	var folderPath 	= './__tests__/';
	var filePath	= './index.js'

	// cp folder
	q.cp(folderPath, './test1');
		
	// cp file
	q.cp(filePath, './1.js');
};

test();