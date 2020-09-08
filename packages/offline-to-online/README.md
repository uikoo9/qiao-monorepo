# offline-to-online
offline to online on nodejs and browser

## install
```
-- on nodejs
npm install qiao-is-online

-- on browser
npm install qiao-is-online-broswer
```

## api
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

### offline to online on browser
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
### 0.0.2.20200908
1. is online img src on browser

### 0.0.1.20200821
1. init project
2. on browser ok
3. string offline online
4. fix
