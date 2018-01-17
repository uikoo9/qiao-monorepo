'use strict';

var qiaoExtOss 	= require('../lib/qiao.ext.oss.js');
var client		= qiaoExtOss.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = function(){
	var destPath		= 'test';
	var sourceFolder	= 'd:/test';
	
	console.log('upload folder ' + sourceFolder);
	console.log("to oss bucket's " + destPath);
	console.log();
	
	console.log('please wait a moment...');
	console.log();
	
	qiaoExtOss.uploadFolder(client, destPath, sourceFolder, function(err, rs){
		if(err) throw err;
		
		console.log('upload ' + rs.suc.length + ' files successfully!');
		console.log();
		console.log('upload ' + rs.fail.length + ' files failed!');
		console.log();

		console.log(rs);
	});
};

test();