# urls
## homepage
[https://code.insistime.com/qiao.ext.oss](https://code.insistime.com/qiao.ext.oss)

## github
[https://github.com/insistime/qiao.ext.oss](https://github.com/insistime/qiao.ext.oss)

## npm
[https://www.npmjs.com/package/qiao.ext.oss](https://www.npmjs.com/package/qiao.ext.oss)

# started
## install
npm install qiao.ext.oss

## config.json
```json
{
	"region"		: "your region",
	"accessKeyId"		: "your access key id",
	"accessKeySecret"	: "your access secret",
	"bucket"		: "your bucket"
}
```

# api
## upload file sync
```javascript
'use strict';

var qiaoExtOss	= require('qiao.ext.oss.js');
var client	= qiaoExtOss.client(require('./config.json'));

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
```

## upload folder sync
```javascript
'use strict';

var qiaoExtOss	= require('qiao.ext.oss.js');
var client	= qiaoExtOss.client(require('./config.json'));

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
```

## upload file async
```javascript
'use strict';

var qiaoExtOss	= require('qiao.ext.oss.js');
var client	= qiaoExtOss.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
qiaoExtOss.uploadFile(client, 'test/test.js', 'd:/test.js', function(err, rs){
	if(err) throw err;
	
	console.log(rs);
});
```

## upload folder async
```javascript
'use strict';

var qiaoExtOss	= require('qiao.ext.oss.js');
var client	= qiaoExtOss.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
qiaoExtOss.uploadFolder(client, 'test', 'd:/test', function(err, rs){
	if(err) throw err;
	
	console.log(rs);
});
```

# also in cli
```shell
npm install -g qiao.ext.oss

and put config.json file into your-path
cd your-path

qiao-ext-oss file 	test/test.js	d:/test.js	[info]
qiao-ext-oss folder	test		d:/test		[info]
```

# version
## 0.1.4.20181122
1. npm audit

## 0.1.3.20181012
1. npm audit

## 0.1.2.20180720
1. https homepage

## 0.1.1.20180719
1. modify readme.md
2. readme.md add homepage
3. readme.md add urls

## 0.1.0.20180210
1. highlight md

## 0.0.9.20180208
1. update git url

## 0.0.8.20180117
1. add log
2. add time

## 0.0.7.20180113
1. 代码优化
2. 0.2.0
3. 0.2.1

## 0.0.6.20180112
1. add qiao-ext-oss
2. modify markdown
3. file --> folder

## 0.0.5.20171229
1. 修改readme.md的示例代码

## 0.0.4.20171228
1. test js use strict
2. update package.json

## 0.0.3.20171217
1. upload file async
2. upload file sync
3. upload folder async
4. upload folder sync

## 0.0.2.20171213
1. 删除无关文件
2. 添加npmignore
3. 更新readme文件
4. exports
5. upload file
6. upload folder

## 0.0.1.20171212
1. 初始化项目
2. 添加gitignore文件