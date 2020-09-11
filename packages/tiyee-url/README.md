# t-url
short url by [tiyee.cn](https://tiyee.cn)

## install
```
npm install t-url
```

## api
### shortUrl
```javascript
'use strict';

var t = require('t-url');

var test = async function(){
    try{
        var longUrl     = 'https://baidu.com/';
        var shortUrl    = await t.shortUrl(longUrl);
        console.log(shortUrl);
    }catch(e){
        console.log(e);
    }
};

test();
```

## version
### 0.0.1.20200911
1. init project
2. short url