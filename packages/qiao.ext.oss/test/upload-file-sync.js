'use strict';

var qiaoExtOss 	= require('../lib/qiao.ext.oss.js');
var client		= qiaoExtOss.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = async function(){
	try{
		var destPath	= 'test/test.js';
		var sourceFile 	= 'd:/test.js';
		
		console.log("upload file " + sourceFile + " to oss bucket's " + destPath);
		console.log();
		
		console.log('please wait a moment...');
		console.log();
		
		console.time('total use');
		var rs = await qiaoExtOss.uploadFileSync(client, destPath, sourceFile);
		
		console.log('upload success, url is:');
		console.log('	' + rs.url);
		console.log();
		
		console.timeEnd('total use');
	}catch(e){
		console.log(e);
	}
};

test();