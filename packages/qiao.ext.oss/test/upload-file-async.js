'use strict';

var qiaoExtOss 	= require('../lib/qiao.ext.oss.js');
var client		= qiaoExtOss.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
qiaoExtOss.uploadFile(client, 'test/test.js', 'd:/test.js', function(err, rs){
	if(err) throw err;
	
	console.log(rs);
});