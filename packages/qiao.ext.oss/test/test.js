var qiaoExtOss 			= require('../libs/qiao.ext.oss.js');
var qiaoExtOssConfig	= require('./config.json');

var client = qiaoExtOss.client(qiaoExtOssConfig);
console.log(client);