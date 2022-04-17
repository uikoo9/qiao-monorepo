'use strict';

var q = require('../../lib/qiao-zip.js');

var test = function(){
	var zipFile 	= 'd:/qiao-zip/demo01/test.zip';
	var destFolder	= 'd:/';
	
	q.unzip(zipFile, destFolder);
};

test();