var qiaoExtOss 			= require('../lib/qiao.ext.oss.js');
var qiaoExtOssConfig	= require('./config.json');

var client = qiaoExtOss.client(qiaoExtOssConfig);

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