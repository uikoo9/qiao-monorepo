'use strict';

var qiaoExtOss 	= require('../lib/qiao.ext.oss.js');
var client		= qiaoExtOss.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = function(){
	var destPath	= 'test/test.js';
	var sourceFile 	= 'd:/test.js';
	
	console.log('upload file ' + sourceFile);
	console.log("to oss bucket's " + destPath);
	
	console.log()
	console.log('please wait a moment...');
	
	qiaoExtOss.uploadFile(client, destPath, sourceFile, function(err, rs){
		if(err) throw err;
		
		console.log();
		console.log('upload success, url is:');
		console.log('	' + rs.url);
	});
};

test();