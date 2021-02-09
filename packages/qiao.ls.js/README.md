# qiao.ls.js

## api
### ls
```javascript
'use strict';

var qls = require('qiao.ls.js');

// set
qls.ls('name', 'value');

// get
console.log(qls.ls('name'));

// delete
qls.ls('name', null);
console.log(qls.ls('name'));
```

### cache
```javascript
'use strict';

var qls = require('qiao.ls.js');

// set
qls.cache('name', 'key', 'value');

// get
console.log(qls.cache('name', 'key'));

// delete
qls.cache('name', 'key', null);
console.log(qls.cache('name', 'key'));

// clear
qls.cache('name', null);
```

## version
### 0.0.6.20210209
1. add jest
2. expires to ms

### 0.0.5.20201022
1. export ls and cache

### 0.0.4.20200803
1. ncu

### 0.0.3.20200414
1. set cache
2. get cache
3. remove cache
4. clear cache
5. add cache and ls

### 0.0.2.20191206
1. add funding

### 0.0.1.20190624
1. init project
2. set item
3. get item
4. remove item
5. modify expires
