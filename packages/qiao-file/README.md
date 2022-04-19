# qiao-file
## api
### extname
```javascript
'use strict';

var q = require('qiao-file');

var test = function(){
	var filePath 	= 'd:/test1/test2/test.js';
	var s 			= q.extname(filePath);
	
	console.log(s);
};

test();
```

### isExists
```javascript
'use strict';

var q = require('qiao-file');

var test = function(){
	var fpath 	= 'z:/workspaces/qiao.plugin.coder/lib/qiao.plugin.coder.js';
	var s		= q.isExists(fpath);
	
	console.log(s);
};

test();
```

### lsdir
```javascript
'use strict';

var q = require('qiao-file');

var test = function(){
	var foldersAndFiles = q.lsdir('z:/workspaces/qiao.plugin.coder/');
	console.log(foldersAndFiles);
};

test();
```

### lstree
```javascript
'use strict';

var q = require('qiao-file');

var test = function(){
	var fileTree = q.lstree('./', 'node_modules');
	console.log(fileTree);
	console.log(JSON.stringify(fileTree));
};

test();
```

### mkdir
```javascript
'use strict';

var q = require('qiao-file');

var test = function(){
	var folder = 'd:/test1/test2/test3/test.js';
	
	q.mkdir(folder);
};

test();
```

### rm
```javascript
'use strict';

var q = require('qiao-file');

var test = function(){
	var folderPath 	= 'd:/test1/';
	var filePath	= 'd:/test.png'

	// rm folder
	q.rm(folderPath);
		
	// rm file
	q.rm(filePath);
};

test();
```

### cp
```javascript
'use strict';

var q = require('qiao-file');

var test = function(){
	var folderPath 	= './test/';
	var filePath	= './qiao-file.js'

	// cp folder
	q.cp(folderPath, './test1');
		
	// cp file
	q.cp(filePath, './1.js');
};

test();
```

## version
### 0.1.2.20220419
1. es6
2. add lstree

### 0.1.1.20220417
1. add lerna

### 0.1.0.20220317
1. add cp

### 0.0.9.20191204
1. add funding

### 0.0.8.20191011
1. exports.fs
2. exports.path

### 0.0.7.20190122
1. modify md

### 0.0.6.20190117
1. extname to lower case
2. add lsdir
3. add rm

### 0.0.5.20190107
1. nodejs file tool

### 0.0.4.20181127
1. modify method name
2. add .js

### 0.0.3.20181122
1. npm audit

### 0.0.2.20181017
1. isExists
2. extname
3. mkdir
4. getAllFiles

### 0.0.1.20181016
1. init
