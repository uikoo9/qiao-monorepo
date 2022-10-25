## qiao-is-online
[![npm version](https://img.shields.io/npm/v/qiao-is-online.svg?style=flat-square)](https://www.npmjs.org/package/qiao-is-online)
[![npm downloads](https://img.shields.io/npm/dm/qiao-is-online.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-is-online)

nodejs下判断是否在线

## api
### isOnline
```javascript
'use strict';

var q = require('qiao-is-online');

var test = async function(){
    try{
        var isOnline = await q.isOnline();
        console.log(isOnline);

        // strict mode, all hosts alive return online
        var isOnlineStrictMode = await q.isOnline(true);
        console.log(isOnlineStrictMode);
    }catch(e){
        console.log(e);
    }
};

test();
```

### offline to online on nodejs
```javascript
'use strict';

var q = require('qiao-is-online');

// callback
// time, interval time, default is 3*1000ms
q.offlineToOnline(function(){
    console.log('offline-to-online');
}, 3 * 1000);
```

## version
### 0.0.6.20221025
1. 1.0.0
   
### 0.0.5.20220512
1. lerna

### 0.0.4.20210220
1. ncu

### 0.0.3.20210219
1. add jest
2. add jsdoc

### 0.0.2.2020908
1. offline-to-online@0.0.8

### 0.0.1.20200821
1. init project
2. is online
2. offline to online
