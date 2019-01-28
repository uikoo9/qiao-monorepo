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
	
	qiaoExtOss.uploadFile(client, destPath, sourceFile, function(err, rs){
		if(err) throw err;
		
		console.log(rs);
	});
};

test();