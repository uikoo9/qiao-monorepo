'use strict';

var qiaoExtOss 	= require('../lib/qiao.ext.oss.js');
var client		= qiaoExtOss.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = async function(){
	try{
		var destPath		= 'test';
		var sourceFolder	= 'd:/test';
		
		console.log('upload folder ' + sourceFolder);
		console.log("to oss bucket's " + destPath);
		
		console.log()
		console.log('please wait a moment...');
		
		var rs = await qiaoExtOss.uploadFolderSync(client, destPath, sourceFolder);

		console.log();
		console.log('upload success!');

		console.log();
		console.log(rs);
	}catch(e){
		console.log(e);
	}
};

test();