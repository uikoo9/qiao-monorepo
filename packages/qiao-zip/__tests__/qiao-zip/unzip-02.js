'use strict';

var q = require('../../lib/qiao-zip.js');

var test = function(){
	var zipFile 	= 'd:/qiao-zip/demo02/test.zip';
	var destFolder	= 'd:/qiao-zip/demo02';
	
	q.unzip(zipFile, destFolder);
};

test();