'use strict';

var q = require('../index.js');

var test = function(){
	var filePath 	= './1.js';
	q.writeFile(filePath, '2');
};

test();