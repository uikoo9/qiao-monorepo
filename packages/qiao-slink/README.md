# qiao-slink

short link by [tiyee.cn](https://tiyee.cn)

## api

### shortLink

```javascript
"use strict";

var q = require("qiao-slink");

var test = async function () {
  try {
    var longLink = "https://baidu.com/";
    var shortLink = await q.shortLink(longLink);
    console.log(shortLink);
  } catch (e) {
    console.log(e);
  }
};

test();
```

## version

### 0.0.1.20200911

1. init project
2. short url
3. qiao-slink
