'use strict';

var q = require('../index.js');

var test = function(){
	var sourceFile	= '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-zip/lib/qiao-zip.js';
	var destZip		= './1.zip';
	
	console.log('zip file ' + sourceFile);
	console.log('in ' + destZip);
	console.log();
	
	console.log('please wait a moment...');
	console.log();
	
	q.zipFile(sourceFile, destZip, function(err, msg){
		if(err) throw err;
		console.log(msg);
	});
};

test();