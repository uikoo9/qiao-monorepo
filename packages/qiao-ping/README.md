## qiao-ping

[![npm version](https://img.shields.io/npm/v/qiao-ping.svg?style=flat-square)](https://www.npmjs.org/package/qiao-ping)
[![npm downloads](https://img.shields.io/npm/dm/qiao-ping.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-ping)

nodejs 下 ping 能力，详见：[一篇文章判断用户是否在线](https://blog.insistime.com/is-online)

## api

### ping

```javascript
'use strict';

var q = require('qiao-ping');

var test = async function () {
  try {
    var host = 'insistime.com';
    var res = await q.ping(host);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

## version

### 0.0.3.20221025

1. 1.0.0

### 0.0.2.20220512

1. lerna

### 0.0.1.20200821

1. init project
