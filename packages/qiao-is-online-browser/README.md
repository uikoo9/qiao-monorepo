# qiao-is-online-browser
1. is online on browser by load img
2. offline to online on browser

## api
### isOnline
```javascript
'use strict';

var q = require('qiao-is-online-browser');

var test = async function(){
    try{
        var isOnlineImgSrc = 'your online img src';
        var isOnline = await q.isOnline(isOnlineImgSrc);
        console.log(isOnline);
    }catch(e){
        console.log(e);
    }
};

test();
```

### offlineToOnline
```javascript
'use strict';

var q = require('qiao-is-online-browser');

// is online img src
var isOnlineImgSrc = 'your online img src';

// callback
// time, interval time, default is 3*1000ms
q.offlineToOnline(isOnlineImgSrc, function(){
    console.log('offline-to-online');
}, 3 * 1000);
```

## version
### 0.0.3.20210220
1. ncu
2. add jsdoc

### 0.0.2.20200908
1. is online with img src

### 0.0.1.20200821
1. init project
2. is online
3. offline to online
