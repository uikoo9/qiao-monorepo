# urls
## homepage
[https://code.insistime.com/qiao.ext.txsms](https://code.insistime.com/qiao.ext.txsms)

## github
[https://github.com/insistime/qiao.ext.txsms](https://github.com/insistime/qiao.ext.txsms)

## npm
[https://www.npmjs.com/package/qiao.ext.txsms](https://www.npmjs.com/package/qiao.ext.txsms)

# started
## install
npm install qiao.ext.txsms

## dependencies
1. qcloudsms_js

## documentation
1. qcloudsms_js, https://www.npmjs.com/package/qcloudsms_js

# api
## connection
```javascript
'use strict';

var qiaoPluginMysql = require('qiao.ext.txsms');

var connection = qiaoPluginMysql.connection(require('./_config.json'));
console.log(connection);
```

# version
## 0.0.1.20181127
1. init project