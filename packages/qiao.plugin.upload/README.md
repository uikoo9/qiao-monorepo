# urls
## homepage
[https://code.insistime.com/qiao.plugin.upload](https://code.insistime.com/qiao.plugin.upload)

## github
[https://github.com/insistime/qiao.plugin.upload](https://github.com/insistime/qiao.plugin.upload)

## npm
[https://www.npmjs.com/package/qiao.plugin.upload](https://www.npmjs.com/package/qiao.plugin.upload)

# started
## install
npm install qiao.plugin.upload

## dependencies
1. multer

## documentation
1. multer, https://www.npmjs.com/package/multer

# api
## gen
```javascript
'use strict';

var qiaoPluginUpload = require('qiao.plugin.upload');

function test(){
	var dir		= 'd:/';
	var filename= '1.txt';
	var upload 	= qiaoPluginUpload.gen(dir, filename);
	
	console.log(upload);
}

test(); 
```

## genWithExt
```javascript
'use strict';

var qiaoPluginUpload = require('qiao.plugin.upload');

function test(){
	var dir		= 'd:/';
	var upload 	= qiaoPluginUpload.genWithExt(dir);
	
	console.log(upload);
}

test(); 
```

## genWithName
```javascript
'use strict';

var qiaoPluginUpload = require('qiao.plugin.upload');

function test(){
	var dir		= 'd:/';
	var upload 	= qiaoPluginUpload.genWithName(dir);
	
	console.log(upload);
}

test(); 
```

# version
## 0.0.1.20190225
1. init project
2. gen
3. gen with ext
4. gen with name