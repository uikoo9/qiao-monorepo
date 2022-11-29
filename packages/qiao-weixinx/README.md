# qiao-weixinx

## use

1. 微信开发者工具——项目设置——调试基础库——>=2.2.1 版本&勾选【使用 npm 模块】
2. npm i qiao-weixinx 后微信开发者工具——工具——npm 构建
3. var q = require('qiao-weixinx');

## api

### ajax

```javascript
var q = require("qiao-weixinx");

// ajax with url
// default data {}
// default method post
q.ajax(
  {
    url: url,
  },
  function (data) {
    // success
  },
  function (data) {
    // fail
  }
);

// ajax with url, data, method, headers
q.ajax(
  {
    url: url,
    data: {
      // data
    },
    method: "POST",
    headers: {
      // headers
    },
  },
  function (data) {
    // success
  },
  function (data) {
    // fail
  }
);
```

### alert

```javascript
var q = require("qiao-weixinx");

// alert, without callback
q.alert("alert");

// alert, with callback
q.alert("alert", function () {
  // callback for click ok
});

// custom alert, without callback
q.alert({
  title: "alert",
  content: "alert",
  confirmText: "ok",
  confirmColor: "#3CC51F",
});

// custom alert, with callback
q.alert(
  {
    title: "alert",
    content: "alert",
    confirmText: "ok",
    confirmColor: "#3CC51F",
  },
  function () {
    // callback for click ok
  }
);
```

### confirm

```javascript
var q = require("qiao-weixinx");

// confirm, without callback
q.confirm("confirm");

// confirm, with callback
q.confirm(
  "confirm",
  function () {
    // callback for click ok
  },
  function () {
    // callback for click cancel
  }
);

// custom confirm, without callback
q.confirm({
  title: "confirm",
  content: "confirm",
  showCancel: true,
  cancelText: "cancel",
  cancelColor: "#000000",
  confirmText: "ok",
  confirmColor: "#3CC51F",
});

// custom confirm, with callback
q.confirm(
  {
    title: "confirm",
    content: "confirm",
    showCancel: true,
    cancelText: "cancel",
    cancelColor: "#000000",
    confirmText: "ok",
    confirmColor: "#3CC51F",
  },
  function () {
    // callback for click ok
  },
  function () {
    // callback for click cancel
  }
);
```

### suc

```javascript
var q = require("qiao-weixinx");

// tip for success
q.suc("success message");

// custom tip for success
q.suc({
  title: "success message",
  duration: 3000,
  mask: true,
});
```

### tip

```javascript
var q = require("qiao-weixinx");

// tip
q.tip("tips");

// custom tip
q.tip({
  title: "custom tip",
  duration: 3000,
  mask: true,
});
```

### loading

```javascript
var q = require("qiao-weixinx");

// default loading
q.loading();

// custom loading
q.loading("custom loading");
```

### hideLoading

```javascript
var q = require("qiao-weixinx");

// hide loading
q.hideLoading();
```

### sheet

```javascript
var q = require("qiao-weixinx");

// sheet
q.sheet(["1", "2"], function (index) {
  // index : 0,1
});
```

### title

```javascript
var q = require("qiao-weixinx");

// set navigation bar title
q.title(
  title,
  function () {
    // success
  },
  function () {
    // fail
  }
);
```

### to

```javascript
var q = require("qiao-weixinx");

// navigate to
q.to(
  url,
  function () {
    // success
  },
  function () {
    // fail
  }
);
```

### rto

```javascript
var q = require("qiao-weixinx");

// redirect to
q.rto(
  url,
  function () {
    // success
  },
  function () {
    // fail
  }
);
```

### tab

```javascript
var q = require("qiao-weixinx");

// switch tab
q.tab(
  url,
  function () {
    // success
  },
  function () {
    // fail
  }
);
```

### back

```javascript
var q = require("qiao-weixinx");

// navigate back
q.back(page);
```

### set

```javascript
var q = require("qiao-weixinx");

// set data to localstorage
q.set(key, value);
```

### get

```javascript
var q = require("qiao-weixinx");

// get data from localstorage
q.get(key);
```

### del

```javascript
var q = require("qiao-weixinx");

// del data from localstorage
q.del(key);
```

### clear

```javascript
var q = require("qiao-weixinx");

// clear data from localstorage
q.clear();
```

### isAndroid

```javascript
var q = require("qiao-weixinx");

// is android
var isAndroid = q.isAndroid();
console.log(isAndroid);
```

### isIos

```javascript
var q = require("qiao-weixinx");

// is ios
var isIos = q.isIos();
console.log(isIos);
```

### net

```javascript
var q = require("qiao-weixinx");

// net
q.net(function (type) {
  // type : wifi/2g/3g/4g/unknown/none
});
```

### screen

```javascript
var q = require("qiao-weixinx");

// get screen
q.screen(
  null,
  function (v) {
    // success
  },
  function () {
    // fail
  }
);

// set screen keep on
q.screen(
  "on",
  function () {
    // success
  },
  function () {
    // fail
  }
);

// set screen 0-1
q.screen(
  0,
  function () {
    // success
  },
  function () {
    // fail
  }
);
```

### showImg

```javascript
var q = require("qiao-weixinx");

// show img with url
q.showImg(url);

// show img with urls
q.showImg(url, urls);
```

### checkAuth

```javascript
var q = require("qiao-weixinx");

// check auth
q.checkAuth("scope.camera", "need camera auth", function () {
  // success
});
```

### version

```javascript
var q = require("qiao-weixinx");

// get weixin version
var weixinVersion = q.version();
console.log(weixinVersion);
```

### sversion

```javascript
var q = require("qiao-weixinx");

// get weixin sdk version
var weixinSDKVersion = q.sversion();
console.log(weixinSDKVersion);
```

### higherThan

```javascript
var q = require("qiao-weixinx");

// compare weixin sdk version higher than
var flag = q.higherThan("0.9.90");
console.log(flag);
```

## version

### 0.3.2.20220513

1. lerna

### 0.3.1.20191206

1. add funding

### 0.3.0.20190107

1. tools for weixin mini program

### 0.2.9.20190104

1. modify console.log version

### 0.2.8.20181219

1. add .v

### 0.2.7.20181211

1. title

### 0.2.6.20181127

1. tip 3000 --> 2000
2. modify md

### 0.2.5.20181123

1. update md for weixin

### 0.2.4.20181122

1. update package.json
2. qiao-weixinx --> qiao-weixinx
3. update version

### 0.2.3.20180724

1. readme.md
2. npm publish
3. readme.md add use

### 0.2.2.20180723

1. init
