'use strict';

var qiaoExtOss 			= require('../lib/qiao.ext.oss.js');
var qiaoExtOssConfig	= require('./config.json');

var client = qiaoExtOss.client(qiaoExtOssConfig);

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = async function(){
	try{
		var rs1 = await qiaoExtOss.uploadFolderSync(client, 'test', 'd:/test');
		console.log(rs1);

		var rs2 = await qiaoExtOss.uploadFolderSync(client, 'test', 'd:/test');
		console.log(rs2);
	}catch(e){
		console.log(e);
	}
};

test();