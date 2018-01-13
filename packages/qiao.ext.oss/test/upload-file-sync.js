'use strict';

var qiaoExtOss 	= require('../lib/qiao.ext.oss.js');
var client		= qiaoExtOss.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = async function(){
	try{
		var rs1 = await qiaoExtOss.uploadFileSync(client, 'test/test.js', 'd:/test.js');
		console.log(rs1);

		var rs2 = await qiaoExtOss.uploadFileSync(client, 'test/test.js', 'd:/test.js');
		console.log(rs2);
	}catch(e){
		console.log(e);
	}
};

test();