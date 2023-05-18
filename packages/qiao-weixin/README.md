# qiao-weixin

## api

### accessToken

```javascript
'use strict';

var q = require('qiao-weixin');

var test = async function () {
  var appId = require('./config.json').AppID;
  var appSecret = require('./config.json').AppSecret;

  var accessToken = await q.accessToken(appId, appSecret);
  console.log(accessToken);
};

test();
```

### mpCodeFile

```javascript
'use strict';

var q = require('qiao-weixin');

var test = async function () {
  // accessToken
  var accessToken = '';

  // mp code file by api 1 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
  q.mpCodeFile(1, accessToken, { path: 'views/ucenter-register/ucenter-register' }, 'd:/test1.png');

  // mp code file by api 2 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACodeUnlimit.html
  q.mpCodeFile(2, accessToken, { page: 'views/ucenter-register/ucenter-register', scene: '1' }, 'd:/test2.png');

  // mp code file by api 3 : https://developers.weixin.qq.com/miniprogram/dev/api/createWXAQRCode.html
  q.mpCodeFile(3, accessToken, { path: 'views/ucenter-register/ucenter-register' }, 'd:/test3.png');
};

test();
```

### mpCodeSrc

```javascript
'use strict';

var q = require('qiao-weixin');

var test = async function () {
  // accessToken
  var accessToken = '';

  // mp code src by api 1 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
  var src1 = await q.mpCodeSrc(1, accessToken, {
    path: 'views/ucenter-register/ucenter-register',
  });

  // mp code src by api 2 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACodeUnlimit.html
  var src2 = await q.mpCodeSrc(2, accessToken, { page: 'views/ucenter-register/ucenter-register', scene: '1' }, 'jpg');

  // mp code src by api 3 : https://developers.weixin.qq.com/miniprogram/dev/api/createWXAQRCode.html
  var src3 = await q.mpCodeSrc(3, accessToken, { path: 'views/ucenter-register/ucenter-register' }, 'png');

  console.log(src1);
  console.log(src2);
  console.log(src3);
};

test();
```
