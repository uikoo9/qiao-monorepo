# t-url
short url by [tiyee.cn](https://tiyee.cn)

## install
```
npm install t-url
```

## api
### getIp
```javascript
'use strict';

var q = require('t-url');

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
### 0.0.1.20200910
1. init project