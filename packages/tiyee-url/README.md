# tiyee-url
short url by [tiyee.cn](https://tiyee.cn)

## install
```
npm install tiyee-url
```

## api
### shortUrl
```javascript
'use strict';

var tiyee = require('tiyee-url');

var test = async function(){
    try{
        var longUrl     = 'https://baidu.com/';
        var shortUrl    = await tiyee.shortUrl(longUrl);
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
3. tiyee-url
