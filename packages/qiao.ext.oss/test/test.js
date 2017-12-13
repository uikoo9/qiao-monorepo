var qiaoExtOss 			= require('../libs/qiao.ext.oss.js');
var qiaoExtOssConfig	= require('./config.json');

var client = qiaoExtOss.client(qiaoExtOssConfig);

// upload local file
try{
	var s = client.put('file', 'd:/test.js');
	console.log(s);
}catch(e){
	console.log(e);
}