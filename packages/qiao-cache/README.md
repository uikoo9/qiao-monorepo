# qiao-cache
nodejs memory cache

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

## api
### c
```javascript
'use strict';

var q = require('qiao-cache');

// default path
var _c1 = q.c();
console.log(_c1);

// custom path
var _c2 = q.c('../');
console.log(_c2);
```

## version
### 0.0.1.20201106
1. init project