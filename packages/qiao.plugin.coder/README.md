# urls
## homepage
[https://code.insistime.com/qiao.plugin.coder](https://code.insistime.com/qiao.plugin.coder)

## github
[https://github.com/insistime/qiao.plugin.coder](https://github.com/insistime/qiao.plugin.coder)

## npm
[https://www.npmjs.com/package/qiao.plugin.coder](https://www.npmjs.com/package/qiao.plugin.coder)

# started
## install
npm install qiao.plugin.coder

## dependencies
1. art-template

# api
## gen file by data
```javascript
'use strict';

var qiaoPluginCoder = require('qiao.plugin.coder');

var test = function(){
	var templateFile 	= 'd:/test/test.art';
	var templateData	= {name : 'test'};
	var destFile		= 'd:/test/test.html';
	
	qiaoPluginCoder.genFileByData(templateFile, templateData, destFile);
};

test();
```

## gen file by file
```javascript
'use strict';

var qiaoPluginCoder = require('../lib/qiao.plugin.coder');

var test = function(){
	var templateFile 		= 'd:/test/test.art';
	var templateDataFile	= 'd:/test/test.json';
	var destFile			= 'd:/test/test.html';
	
	qiaoPluginCoder.genFileByFile(templateFile, templateDataFile, destFile);
};

test();
```

# version
## 0.0.2.20181015
1. add art-template
2. gen file by data
3. gen file by file

## 0.0.1.20181012
1. init