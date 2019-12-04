# urls
## homepage
[https://code.insistime.com/qiao.util.encode](https://code.insistime.com/qiao.util.encode)

## github
[https://github.com/insistime/qiao.util.encode](https://github.com/insistime/qiao.util.encode)

## npm
[https://www.npmjs.com/package/qiao.util.encode](https://www.npmjs.com/package/qiao.util.encode)

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

# started
## install
npm install qiao.util.encode

# api
## md5
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

var data 	= '{"nihao":"name"}';
var s		= qiaoUtilEncode.md5(data);
console.log(s);

// or use encoding, hex or base64
var ss		= qiaoUtilEncode.md5(data, 'hex');
console.log(ss);
```

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

## random
### random
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

// random number
var type	= 0;
var length	= 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.random(type, length));

// random lower letter
var type	= 1;
var length	= 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.random(type, length));

// random upper letter
var type	= 2;
var length	= 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.random(type, length));

// random all letter
var type	= 3;
var length	= 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.random(type, length));

// random all letter and number
var type	= 4;
var length	= 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.random(type, length));
```

### random number
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

var length = 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.randomNumber(length));
```

### random lower letter
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

var length = 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.randomLetterLower(length));
```

### random upper letter
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

var length = 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.randomLetterUpper(length));
```

### random all letter
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

var length = 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.randomLetterAll(length));
```

### random all letter and number
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

var length = 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.randomLetterNumber(length));
```

### random seed
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

var seed	= '0123456789';
var length 	= 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.randomSeed(seed, length));
```

### random by seed
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

var seed = '0123456789';
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.randomBySeed(seed));
```

### random in
```javascript
'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

var min = 0;
var max = 9;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.randomIn(min, max));
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

// or use iv and encoding(hex, base64)
var iv		= '';
var encoding= 'hex';
var s1		= qiaoUtilEncode.AESEncrypt(data, key, iv, encoding);
console.log(s1);

var ss1		= qiaoUtilEncode.AESDecrypt(s1, key, iv, encoding);
console.log(ss1);
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

// or use iv and encoding(hex, base64)
var iv		= '';
var encoding= 'hex';
var s1		= qiaoUtilEncode.TDESEncrypt(data, key, iv, encoding);
console.log(s1);

var ss1		= qiaoUtilEncode.TDESDecrypt(s1, key, iv, encoding);
console.log(ss1);
```

# version
## 0.0.7.20191204
1. update packages
2. add funding

## 0.0.6.20190116
1. add md5

## 0.0.5.20181128
1. add random

## 0.0.4.20181127
1. add uuid

## 0.0.3.20181122
1. npm audit

## 0.0.2.20181115
1. add crypt method

## 0.0.1.20181112
1. init project
2. modify md
