# qiao-weixin

## api

### accessToken

```javascript
"use strict";

var q = require("qiao-weixin");

var test = async function () {
  var appId = require("./config.json").AppID;
  var appSecret = require("./config.json").AppSecret;

  var accessToken = await q.accessToken(appId, appSecret);
  console.log(accessToken);
};

test();
```

### mpCodeFile

```javascript
"use strict";

var q = require("qiao-weixin");

var test = async function () {
  // accessToken
  var accessToken = "";

  // mp code file by api 1 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
  q.mpCodeFile(
    1,
    accessToken,
    { path: "views/ucenter-register/ucenter-register" },
    "d:/test1.png"
  );

  // mp code file by api 2 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACodeUnlimit.html
  q.mpCodeFile(
    2,
    accessToken,
    { page: "views/ucenter-register/ucenter-register", scene: "1" },
    "d:/test2.png"
  );

  // mp code file by api 3 : https://developers.weixin.qq.com/miniprogram/dev/api/createWXAQRCode.html
  q.mpCodeFile(
    3,
    accessToken,
    { path: "views/ucenter-register/ucenter-register" },
    "d:/test3.png"
  );
};

test();
```

### mpCodeSrc

```javascript
"use strict";

var q = require("qiao-weixin");

var test = async function () {
  // accessToken
  var accessToken = "";

  // mp code src by api 1 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
  var src1 = await q.mpCodeSrc(1, accessToken, {
    path: "views/ucenter-register/ucenter-register",
  });

  // mp code src by api 2 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACodeUnlimit.html
  var src2 = await q.mpCodeSrc(
    2,
    accessToken,
    { page: "views/ucenter-register/ucenter-register", scene: "1" },
    "jpg"
  );

  // mp code src by api 3 : https://developers.weixin.qq.com/miniprogram/dev/api/createWXAQRCode.html
  var src3 = await q.mpCodeSrc(
    3,
    accessToken,
    { path: "views/ucenter-register/ucenter-register" },
    "png"
  );

  console.log(src1);
  console.log(src2);
  console.log(src3);
};

test();
```

## version

### 0.0.5.20200803

1. ncu

### 0.0.4.20191206

1. add funding

### 0.0.3.20190108

1. 接口 1 生成文件
2. 接口 1 生成 src
3. 接口 1-3 生成文件或者返回 src

### 0.0.2.20190107

1. nodejs weixin sdk

### 0.0.1.20190104

1. init project
2. access token
