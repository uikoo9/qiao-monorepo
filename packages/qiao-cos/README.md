# qiao-cos
## config.json
```json
{
	"SecretId"	: "your secret id",
	"SecretKey"	: "your secret key",
	"Region"	: "your region",
	"Bucket"	: "your bucket"
}
```

## api
### uploadFileSync
```javascript
'use strict';

var q 		= require('qiao-cos');
var client	= q.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = async function(){
	try{
		var destPath	= 'test/test.js';
		var sourceFile 	= 'd:/test.js';
		
		var rs = await q.uploadFileSync(client, destPath, sourceFile);
		console.log(rs);
	}catch(e){
		console.log(e);
	}
};

test();
```

### uploadFolderSync
```javascript
'use strict';

var q 		= require('qiao-cos');
var client	= q.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = async function(){
	try{
		var destPath		= 'static';
		var sourceFolder	= 'd:/static';
		
		var rs = await q.uploadFolderSync(client, destPath, sourceFolder);
		console.log(rs);
	}catch(e){
		console.log(e);
	}
};

test();
```

### uploadFile
```javascript
'use strict';

var q 		= require('qiao-cos');
var client	= q.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = function(){
		var destPath	= 'test/test.js';
		var sourceFile 	= 'd:/test.js';
		
		q.uploadFile(client, destPath, sourceFile, function(err, data){
			console.log(err, data);
		});
};

test();
```

### uploadFolder
```javascript
'use strict';

var q 		= require('qiao-cos');
var client	= q.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = function(){
	var destPath		= 'static';
	var sourceFolder	= 'd:/static';
	
	q.uploadFolder(client, destPath, sourceFolder, function(rs){
		console.log(rs);
	});
};

test();
```

## also in cli
```shell
npm install -g qiao-cos

qcos file 	z:/workspaces/qiao-cos/test/config.json 	d:/test.js	test.js	
qcos folder	z:/workspaces/qiao-cos/test/config.json 	d:/test/cocos	test9 	-i

or

qcos fi 	z:/workspaces/qiao-cos/test/config.json 	d:/test.js 	test.js	
qcos fo		z:/workspaces/qiao-cos/test/config.json 	d:/test/cocos 	test9 	-i

or

qcos | qcos -h for help
```

## version
### 0.1.0.20220401
1. ncu

### 0.0.9.20200718
1. ncu

### 0.0.8.20200403
1. ncu

### 0.0.7.20191219
1. fix folderPath bug

### 0.0.6.20191206
1. add funding
2. update packages

### 0.0.5.20190808
1. cos-nodejs-sdk-v5@2.5.9
2. qiao.plugin.cli@0.0.8

### 0.0.4.20190622
1. qcos fix ./

### 0.0.3.20190529
1. check region and bucket

### 0.0.2.20190130
1. upload file async
2. upload file sync
3. upload folder async
4. upload folder sync
5. modify qcos
6. 优化代码，并行上传

### 0.0.1.20190128
1. 初始化项目
2. upload file
3. upload folder 
4. qcos ok
5. modify md
6. modify qiao-cos
7. bin qcos
