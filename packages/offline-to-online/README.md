# offline-to-online
offline to online on nodejs and browser

## install
```
npm install offline-to-online
```

## api
### offlineToOnline
```javascript
'use strict';

var q = require('offline-to-online');

var test = async function(){
    try{
        var ip = await q.getIp();
        console.log(ip);
    }catch(e){
        console.log(e);
    }
};

test();
```

## version
### 0.0.1.20200821
1. init project