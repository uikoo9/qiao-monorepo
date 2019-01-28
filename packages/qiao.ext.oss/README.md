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
	"accessKeyId"		: "your access key id",
	"accessKeySecret"	: "your access secret",
	"region"		: "your region",
	"bucket"		: "your bucket"
}
```

# api
## uploadFileSync
'use strict';

var qiaoExtOss 	= require('qiao.ext.oss');
var client		= qiaoExtOss.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = async function(){
	try{
		var destPath	= 'test/test.js';
		var sourceFile 	= 'd:/test.js';
		
		var rs = await qiaoExtOss.uploadFileSync(client, destPath, sourceFile);
		console.log(rs);
	}catch(e){
		console.log(e);
	}
};

test();
```

## uploadFolderSync
```javascript
'use strict';

var qiaoExtOss 	= require('qiao.ext.oss');
var client		= qiaoExtOss.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = async function(){
	try{
		var destPath		= 'test';
		var sourceFolder	= 'd:/test/cocos';
		
		var rs = await qiaoExtOss.uploadFolderSync(client, destPath, sourceFolder);
		console.log(rs);
	}catch(e){
		console.log(e);
	}
};

test();
```

## uploadFile
```javascript
'use strict';

var qiaoExtOss 	= require('qiao.ext.oss');
var client		= qiaoExtOss.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = function(){
	var destPath	= 'test/test.js';
	var sourceFile 	= 'd:/test.js';
	
	qiaoExtOss.uploadFile(client, destPath, sourceFile, function(err, rs){
		if(err) throw err;
		
		console.log(rs);
	});
};

test();
```

## uploadFolder
```javascript
'use strict';

var qiaoExtOss 	= require('qiao.ext.oss');
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
```

# also in cli
```shell
npm install -g qiao.ext.oss

qoss file 	z:/workspaces/qiao.ext.oss/test/config.json 	d:/test.js	test.js	
qoss folder	z:/workspaces/qiao.ext.oss/test/config.json 	d:/test/cocos	test9 	-i

or

qoss fi 	z:/workspaces/qiao.ext.oss/test/config.json 	d:/test.js 	test.js	
qoss fo		z:/workspaces/qiao.ext.oss/test/config.json 	d:/test/cocos 	test9 	-i

or

qoss | qoss -h for help
```

# version
## 0.1.9.20190127
1. del test/config.json

## 0.1.8.20190109
1. update qiao.plugin.cli@0.0.6
2. 调整qoss中client的判断时机
3. output help

## 0.1.7.20190107
1. update ali-oss@6.1.0
2. ali oss upload tool on nodejs

## 0.1.6.20181205
1. qoss with qiao.plugin.cli
2. update ali-oss@6.0.1
3. qiao-ext-oss --> qoss 
4. modify md

## 0.1.5.20181127
1. modify method name
2. del .js
3. index.js

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