## qiao-encode
[![npm version](https://img.shields.io/npm/v/qiao-encode.svg?style=flat-square)](https://www.npmjs.org/package/qiao-encode)
[![npm downloads](https://img.shields.io/npm/dm/qiao-encode.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-encode)

nodejs下加密，随机等能力

## install
```bash
npm i qiao-encode
```

## md5
```javascript
'use strict';

var q = require('qiao-encode');

var data = '{"nihao":"name"}';
var s = q.md5(data);
console.log(s);

// or use encoding, hex or base64
var ss = q.md5(data, 'hex');
console.log(ss);
```

## uuid
```javascript
'use strict';

var q = require('qiao-encode');

// uuid v4
console.log(q.uuid());

// uuid v1
console.log(q.uuid(1));

// uuid v3
console.log(q.uuid(3));

// uuid v4
console.log(q.uuid(4));

// uuid v5
console.log(q.uuid(5));
```

## aes
```javascript
'use strict';

var q = require('qiao-encode');

var data = '{"nihao":"name"}';
var key = '12345612345612345612345612345611';
var s = q.AESEncrypt(data, key);
console.log(s);

var ss = q.AESDecrypt(s, key);
console.log(ss);

// or use iv and encoding(hex, base64)
var iv = '';
var encoding = 'hex';
var s1 = q.AESEncrypt(data, key, iv, encoding);
console.log(s1);

var ss1 = q.AESDecrypt(s1, key, iv, encoding);
console.log(ss1);
```

## 3des
```javascript
'use strict';

var q = require('qiao-encode');

var data = '{"nihao":"name"}';
var key = '123456123456123456112233';
var s = q.TDESEncrypt(data, key);
console.log(s);

var ss = q.TDESDecrypt(s, key);
console.log(ss);

// or use iv and encoding(hex, base64)
var iv = '';
var encoding = 'hex';
var s1 = q.TDESEncrypt(data, key, iv, encoding);
console.log(s1);

var ss1 = q.TDESDecrypt(s1, key, iv, encoding);
console.log(ss1);
```

## random
### random number
```javascript
'use strict';

var q = require('qiao-encode');

var length = 4;
for(var i=0; i<10; i++) console.log(q.randomNumber(length));
```

### random lower letter
```javascript
'use strict';

var q = require('qiao-encode');

var length = 4;
for(var i=0; i<10; i++) console.log(q.randomLetterLower(length));
```

### random upper letter
```javascript
'use strict';

var q = require('qiao-encode');

var length = 4;
for(var i=0; i<10; i++) console.log(q.randomLetterUpper(length));
```

### random all letter
```javascript
'use strict';

var q = require('qiao-encode');

var length = 4;
for(var i=0; i<10; i++) console.log(q.randomLetterAll(length));
```

### random all letter and number
```javascript
'use strict';

var q = require('qiao-encode');

var length = 4;
for(var i=0; i<10; i++) console.log(q.randomLetterNumber(length));
```

### random seed
```javascript
'use strict';

var q = require('qiao-encode');

var seed	= '0123456789';
var length 	= 4;
for(var i=0; i<10; i++) console.log(q.randomSeed(seed, length));
```

### random by seed
```javascript
'use strict';

var q = require('qiao-encode');

var seed = '0123456789';
for(var i=0; i<10; i++) console.log(q.randomBySeed(seed));
```

### random in
```javascript
'use strict';

var q = require('qiao-encode');

var min = 0;
var max = 9;
for(var i=0; i<10; i++) console.log(q.randomIn(min, max));
```

## version
### 0.1.0.20221025
1. 1.0.0
   
### 0.0.9.20220511
1. qiao-encode

### 0.0.8.20200803
1. ncu

### 0.0.7.20191204
1. update packages
2. add funding

### 0.0.6.20190116
1. add md5

### 0.0.5.20181128
1. add random

### 0.0.4.20181127
1. add uuid

### 0.0.3.20181122
1. npm audit

### 0.0.2.20181115
1. add crypt method

### 0.0.1.20181112
1. init project
2. modify md