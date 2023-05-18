# qiao-oss

## config.json

```json
{
  "accessKeyId": "your access key id",
  "accessKeySecret": "your access secret",
  "region": "your region",
  "bucket": "your bucket"
}
```

## api

### uploadFileSync

```javascript
'use strict';

var q = require('qiao-oss');
var client = q.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = async function () {
  try {
    var destPath = 'test/test.js';
    var sourceFile = 'd:/test.js';

    var rs = await q.uploadFileSync(client, destPath, sourceFile);
    console.log(rs);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### uploadFolderSync

```javascript
'use strict';

var q = require('qiao-oss');
var client = q.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = async function () {
  try {
    var destPath = 'test';
    var sourceFolder = 'd:/test/cocos';

    var rs = await q.uploadFolderSync(client, destPath, sourceFolder);
    console.log(rs);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### uploadFile

```javascript
'use strict';

var q = require('qiao-oss');
var client = q.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = function () {
  var destPath = 'test/test.js';
  var sourceFile = 'd:/test.js';

  q.uploadFile(client, destPath, sourceFile, function (err, rs) {
    if (err) throw err;

    console.log(rs);
  });
};

test();
```

### uploadFolder

```javascript
'use strict';

var q = require('qiao-oss');
var client = q.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = function () {
  var destPath = 'test';
  var sourceFolder = 'd:/test/cocos';

  q.uploadFolder(client, destPath, sourceFolder, function (err, rs) {
    if (err) throw err;

    console.log(rs);
  });
};

test();
```

## also in cli

```shell
npm install -g qiao-oss

qoss file 	z:/workspaces/qiao-oss/test/config.json 	d:/test.js	test.js
qoss folder	z:/workspaces/qiao-oss/test/config.json 	d:/test/cocos	test9 	-i

or

qoss fi 	z:/workspaces/qiao-oss/test/config.json 	d:/test.js 	test.js
qoss fo		z:/workspaces/qiao-oss/test/config.json 	d:/test/cocos 	test9 	-i

or

qoss | qoss -h for help
```
