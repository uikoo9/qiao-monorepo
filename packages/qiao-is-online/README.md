# qiao-is-online
1. is online on nodejs
2. by ping hosts: tmall.com, baidu.com, qq.com, taobao.com

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

## version
### 0.0.1.20200821
1. init project