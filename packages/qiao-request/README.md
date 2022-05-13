# qiao-request

## api
### getSync
```javascript
'use strict';

var q = require('qiao-request');

var test = async function(){
	try{
		var url = 'http://www.baidu.com';
		var res = await q.getSync({
			url	: url,
			qs	: {
				test : 'test'
			}
		});
		
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test(); 
```

### postSync
```javascript
'use strict';

var q = require('qiao-request');

var test = async function(){
	try{
		var url = 'http://www.baidu.com';
		var res = await q.postSync({
			url	: url,
			qs	: {
				test : 'test'
			}
		});
		
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

### putSync
```javascript
'use strict';

var q = require('qiao-request');

var test = async function(){
	try{
		var url = 'http://10.33.12.68:8002/put';
		var res = await q.putSync({
			url	: url
		});
		
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

### patchSync
```javascript
'use strict';

var q = require('qiao-request');

var test = async function(){
	try{
		var url = 'http://10.33.12.68:8002/patch';
		var res = await q.patchSync({
			url	: url
		});
		
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

### deleteSync
```javascript
'use strict';

var q = require('qiao-request');

var test = async function(){
	try{
		var url = 'http://10.33.12.68:8002/delete';
		var res = await q.deleteSync({
			url	: url
		});
		
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

### headSync
```javascript
'use strict';

var q = require('qiao-request');

var test = async function(){
	try{
		var url = 'http://10.33.12.68:8002/head';
		var res = await q.headSync({
			url	: url
		});
		
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

### optionsSync
```javascript
'use strict';

var q = require('qiao-request');

var test = async function(){
	try{
		var url = 'http://10.33.12.68:8002/options';
		var res = await q.optionsSync({
			url	: url
		});
		
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

### get
```javascript
'use strict';

var q = require('qiao-request');

var test = function(){
	var url = 'http://www.baidu.com';
	q.get({
		url	: url,
		qs	: {
			test : 'test'
		}
	}, function(err, rs, body){
		console.log(err, body);
	});
};

test();
```

### post
```javascript
'use strict';

var q = require('qiao-request');

var test = function(){
	var url = 'http://www.baidu.com';
	q.post({
		url	: url,
		qs	: {
			test : 'test'
		}
	}, function(err, rs, body){
		console.log(err, body);
	});
};

test();
```

### put
```javascript
'use strict';

var q = require('qiao-request');

var test = function(){
	var url = 'http://10.33.12.68:8002/put';
	q.put({
		url	: url
	}, function(err, rs, body){
		console.log(err, body);
	});
};

test();
```

### patch
```javascript
'use strict';

var q = require('qiao-request');

var test = function(){
	var url = 'http://10.33.12.68:8002/patch';
	q.patch({
		url	: url
	}, function(err, rs, body){
		console.log(err, body);
	});
};

test();
```

### delete
```javascript
'use strict';

var q = require('qiao-request');

var test = function(){
	var url = 'http://10.33.12.68:8002/delete';
	q.delete({
		url	: url
	}, function(err, rs, body){
		console.log(err, body);
	});
};

test();
```

### head
```javascript
'use strict';

var q = require('qiao-request');

var test = function(){
	var url = 'http://10.33.12.68:8002/head';
	q.head({
		url	: url
	}, function(err, rs, body){
		console.log(err, rs.headers);
	});
};

test();
```

### options
```javascript
'use strict';

var q = require('qiao-request');

var test = function(){
	var url = 'http://10.33.12.68:8002/options';
	q.options({
		url	: url
	}, function(err, rs, body){
		console.log(err, body);
	});
};

test();
```

### download
```javascript
'use strict';

var q = require('qiao-request');

var test = async function(){
	try{
		var url 	= 'https://www.baidu.com/img/bd_logo1.png';
		var path	= 'd:/test.png';
		
		await q.download(url, path);
	}catch(e){
		console.log(e);
	}
};

test();
```

### imgToBase64
```javascript
'use strict';

var q = require('qiao-request');

var test = function(){
	var url = 'https://www.baidu.com/img/baidu_resultlogo@2.png';
	q.imgToBase64(url, function(res){
		console.log(res);
	});
};

test();
```

### imgToBase64Sync
```javascript
'use strict';

var q = require('qiao-request');

var test = async function(){
	try{
        var url = 'https://www.baidu.com/img/baidu_resultlogo@2.png';
		var res = await q.imgToBase64Sync(url);
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();
```

## version
### 0.2.3.20220513
1. lerna

### 0.2.2.20200803
1. ncu

### 0.2.1.20200626
1. is online

### 0.2.0.20200610
1. use git request
2. download large file
3. use qiao.plugin.requestfix

### 0.1.9.20200529
1. img to base64 add gif

### 0.1.8.20200512
1. img to base64 add jpeg
2. img to base64 sync

### 0.1.7.20200511
1. add img to base64

### 0.1.6.20200407
1. add get ip

### 0.1.5.20200401
1. add ip

### 0.1.4.20200326
1. ping timeout 4s

### 0.1.3.20200312
1. add ping

### 0.1.2.20191206
1. add funding

### 0.1.1.20190221
1. add put
2. add patch
3. add delete
4. add head
5. add options
6. add request

### 0.1.0.20190117
1. add download
2. donwload finish

### 0.0.9.20190107
1. modify desc
2. update request@2.88.0

### 0.0.8.20181127
1. modify method name
2. add .js

### 0.0.7.20181122
1. npm audit fix

### 0.0.6.20180720
1. https homepage

### 0.0.5.20180719
1. modify readme.md

### 0.0.4.20180523
1. npm audit

### 0.0.3.20180511
1. npm audit

### 0.0.2.20180210
1. delete reqwest
2. highlight md

### 0.0.1.20180208
1. init project
2. request get
3. request post
4. modify index.js
