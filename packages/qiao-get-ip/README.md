## qiao-get-ip

[![npm version](https://img.shields.io/npm/v/qiao-get-ip.svg?style=flat-square)](https://www.npmjs.org/package/qiao-get-ip)
[![npm downloads](https://img.shields.io/npm/dm/qiao-get-ip.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-get-ip)

浏览器和 ndoejs 下获取公网 ip

## api

### getIp

```javascript
'use strict';

var q = require('qiao-get-ip');

var test = async function () {
  try {
    var ip = await q.getIp();
    console.log(ip);
  } catch (e) {
    console.log(e);
  }
};

test();
```

## version

### 0.0.4.20221025

1. 1.0.0

### 0.0.3.20220512

1. ncu

### 0.0.2.20210215

1. add jsdoc
2. add jest

### 0.0.1.20200819

1. init project
2. http method
3. qiao-get-ip
4. get ip by sohu
5. get ip by icanhazip
6. get ip
