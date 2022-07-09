# qiao.cookie.js

## documentation
1. cookie, [https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)

## api
```js
'use strict';

var q = require('qiao.cookie.js');

var test = async function(){
    // vars
    var key = 'test';
    var value = 'test';

    // set & get
    q.set(key, value);
    console.log('set cookie test:' + q.get(key));

    // del
    q.del(key);
    console.log('del cookie test:' + q.get(key));

    // has
    console.log(q.has(key));

    // keys
    console.log(q.keys());
};

test();
```

## version
### 0.0.2.20220709
1. add rollup
2. add eslint
   
### 0.0.1.20220616
1. init project
