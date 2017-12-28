# qiao.ext.oss
---
nodejs ali oss upload tool

# install
---
npm install qiao.ext.oss

# config.json
---
    {
		"region"			: "your region",
		"accessKeyId"		: "your access key id",
		"accessKeySecret"	: "your access secret",
		"bucket"			: "your bucket"
	}

# upload file sync
---
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

# upload folder sync
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

# upload file async
---
	var qiaoExtOss 			= require('../lib/qiao.ext.oss.js');
	var qiaoExtOssConfig	= require('./config.json');
	
	var client = qiaoExtOss.client(qiaoExtOssConfig);
	
	/**
	 * upload file demo
	 * upload d:/test.js to your bucket's test/test.js
	 */
	qiaoExtOss.uploadFile(client, 'test/test.js', 'd:/test.js', function(err, rs){
		if(err) throw err;
		
		console.log(rs);
	});

# upload folder async
---
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
	
# version
---
### 0.0.4.20171228
1. test js use strict

### 0.0.3.20171217
1. upload file async
2. upload file sync
3. upload folder async
4. upload folder sync

### 0.0.2.20171213
1. 删除无关文件
2. 添加npmignore
3. 更新readme文件
4. exports
5. upload file
6. upload folder

### 0.0.1.20171212
1. 初始化项目
2. 添加gitignore文件