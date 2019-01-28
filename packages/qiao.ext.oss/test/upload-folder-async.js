'use strict';

var qiaoExtOss 	= require('../lib/qiao.ext.oss.js');
var client		= qiaoExtOss.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = function(){
	var destPath		= 'test';
	var sourceFolder	= 'd:/test/cocos';
	
	qiaoExtOss.uploadFolder(client, destPath, sourceFolder, function(err, rs){
		if(err) throw err;
		
		console.log(rs);
	});
};

test();