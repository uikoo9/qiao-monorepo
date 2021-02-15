# qiao.ls.js

## api
### ls
```javascript
'use strict';

var q = require('qiao.ls.js');

// set
q.ls('name', 'value');

// set 10s expires
q.ls('name', 'value', 10 * 1000);

// get
console.log(q.ls('name')); // value

// delete
q.ls('name', null);
console.log(q.ls('name')); // undefined
```

## version
### 0.0.8.20210215
1. qls --> q

### 0.0.7.20210214
1. add jsdoc

### 0.0.6.20210209
1. add jest
2. expires to ms
3. md

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
