# qiao-ping
ping on nodejs

## api
### ping
```javascript
'use strict';

var q = require('qiao-ping');

var test = async function(){
    try{
        var host    = 'baidu.com';
        var res     = await q.ping(host);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();
```

## version
### 0.0.2.20220512
1. lerna

### 0.0.1.20200821
1. init project