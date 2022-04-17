# qiao-config
json config to local file

## api
### c
```javascript
'use strict';

var q = require('qiao-config');

// default path
var _c1 = q.c();
console.log(_c1);

// custom path
var _c2 = q.c('../');
console.log(_c2);
```

### all
```javascript
'use strict';

var q = require('qiao-config');

var _c  = q.c();
var s   = _c.all();
console.log(s); // { test: 'hello' }
```

### clear
```javascript
'use strict';

var q = require('qiao-config');

var _c = q.c();
_c.clear();
console.log(_c.all()); // {}
```

### config
```javascript
'use strict';

var q = require('qiao-config');

var _c = q.c();

// set
_c.config('test', 'hello');
console.log(_c.all()); // { test: 'hello' }

// get
var s = _c.config('test');
console.log(s); // hello

// del
_c.config('test', null);
console.log(_c.all()); // {}
```

## version
### 0.0.3.20201105
1. c --> config
2. custom path

### 0.0.2.20200901
1. del ok
2. c ok
3. md

### 0.0.1.20200828
1. init project
2. get ok
3. set ok
4. all ok
5. clear ok