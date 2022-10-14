## qiao.cookie.js

[![npm version](https://img.shields.io/npm/v/qiao.cookie.js.svg?style=flat-square)](https://www.npmjs.org/package/qiao.cookie.js)
[![npm downloads](https://img.shields.io/npm/dm/qiao.cookie.js.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao.cookie.js)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/qiao.cookie.js)

## documentation
cookie，[https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)

## api
### cjs
```javascript
// q
const q = require('qiao.cookie.js');

// get
q.get('key');

// set
q.set('key', 'value');

// del
q.del('key');

// has
q.has('key');

// keys
q.keys();
```

### mjs
```javascript
// q
import { get, set, del, has, keys} from 'qiao.cookie.js';

// get
get('key');

// set
set('key', value);

// del
del('key');

// has
has('key');

// keys
keys();
```

## version
### 0.0.4.20221014
1. md
   
### 0.0.3.20220712
1. tree shaking
   
### 0.0.2.20220709
1. add rollup
2. add eslint
3. add jest
   
### 0.0.1.20220616
1. init project
