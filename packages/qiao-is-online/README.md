# qiao-is-online
1. is online on nodejs by ping hosts: tmall.com, baidu.com, qq.com, taobao.com
2. offline to online on nodejs

## install
```
npm install qiao-is-online
```

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
### 0.0.2.2020908
1. offline-to-online@0.0.8

### 0.0.1.20200821
1. init project
2. is online
2. offline to online