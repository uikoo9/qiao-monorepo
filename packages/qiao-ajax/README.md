# qiao-ajax

## api
### get
```javascript
'use strict';

var q = require('qiao-ajax');

var test = async function(){
    try{
        var url = 'http://icanhazip.com/';
        var res = await q.get(url);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test(); 
```

### post
### put
### patch
### delete
### head
### options

## version
### 0.0.6.20220510
1. ncu

### 0.0.5.20220415
1. qiao-webpack
2. lerna

### 0.0.4.20220412
1. ncu

### 0.0.3.20210215
1. ncu

### 0.0.2.20200820
1. md

### 0.0.1.20200819
1. init project
2. http method
3. qiao-ajax
