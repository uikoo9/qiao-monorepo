# urls
## homepage
[https://code.insistime.com/qiao.util.encode](https://code.insistime.com/qiao.util.encode)

## github
[https://github.com/insistime/qiao.util.encode](https://github.com/insistime/qiao.util.encode)

## npm
[https://www.npmjs.com/package/qiao.util.encode](https://www.npmjs.com/package/qiao.util.encode)

# started
## install
npm install qiao.util.encode

# api
## uuid
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

// uuid v4
var uuid0 = qiaoUtilEncode.uuid();
console.log(uuid0);

// uuid v1
var uuid1 = qiaoUtilEncode.uuid(1);
console.log(uuid1);

// uuid v3
var uuid3 = qiaoUtilEncode.uuid(3);
console.log(uuid3);

// uuid v4
var uuid4 = qiaoUtilEncode.uuid(4);
console.log(uuid4);

// uuid v5
var uuid5 = qiaoUtilEncode.uuid(5);
console.log(uuid5);
```

## aes
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

var data 	= '{"nihao":"name"}';
var key		= '12345612345612345612345612345611';
var s		= qiaoUtilEncode.AESEncrypt(data, key);
console.log(s);

var ss		= qiaoUtilEncode.AESDecrypt(s, key);
console.log(ss);
```

## 3des
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

var data 	= '{"nihao":"name"}';
var key		= '123456123456123456112233';
var s		= qiaoUtilEncode.TDESEncrypt(data, key);
console.log(s);

var ss		= qiaoUtilEncode.TDESDecrypt(s, key);
console.log(ss);
```

# version
## 0.0.4.20181127
1. add uuid

## 0.0.3.20181122
1. npm audit

## 0.0.2.20181115
1. add crypt method

## 0.0.1.20181112
1. init project
2. modify md