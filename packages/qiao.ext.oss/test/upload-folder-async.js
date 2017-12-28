'use strict';

var qiaoExtOss 			= require('../lib/qiao.ext.oss.js');
var qiaoExtOssConfig	= require('./config.json');

var client = qiaoExtOss.client(qiaoExtOssConfig);

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
qiaoExtOss.uploadFolder(client, 'test', 'd:/test', function(err, rs){
	if(err) throw err;
	
	console.log(rs);
});