# qiao-parallel

[![npm version](https://img.shields.io/npm/v/qiao-parallel.svg?style=flat-square)](https://www.npmjs.org/package/qiao-parallel)
[![npm downloads](https://img.shields.io/npm/dm/qiao-parallel.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-parallel)

nodejs 下并行执行任务，详见：[一篇文章了解 JS 并行任务](https://blog.insistime.com/parallel)

## code

示例代码

### values

并行任务池

```javascript
"use strict";

/**
 * values
 */
module.exports = [100, 300, 200, 400];
```

### callback

单个任务完成回调

```javascript
"use strict";

// q
var q = require("qiao-console");

/**
 * callback
 * @param {*} index
 * @param {*} res
 */
module.exports = function (index, res) {
  q.writeLine(index, `${index} ${res}`);
};
```

### complete

所有任务完成回调

```javascript
"use strict";

// q
var q = require("qiao-console");

/**
 * complete
 * @param {*} l
 */
module.exports = function (l) {
  q.writeLine(l, "complete");
};
```

### handler

模拟任务代码

```javascript
"use strict";

/**
 * handler
 * @param {*} timeout
 * @returns
 */
module.exports = function (timeout) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      return resolve(timeout);
    }, timeout);
  });
};
```

### handler fork js

模拟任务代码-fork 模式

```javascript
"use strict";

// handler
var handler = require("./_handler.js");

// fork handler
async function forkHandler() {
  // check
  if (!process || !process.argv) return;

  // value
  var value = parseInt(process.argv[2]);

  // msg
  var msg = await handler(value);
  process.send(msg);
}

forkHandler();
```

## use

### parallel by IIFE

```javascript
"use strict";

// q
var q = require("qiao-console");

// vars
var values = require("./_values.js");
var handler = require("./_handler.js");
var callback = require("./_callback.js");
var complete = require("./_complete.js");

// parallel
var parallel = require("qiao-parallel");

// test
(function () {
  q.clear();

  parallel.parallelByIIFE(handler, values, callback, complete);
})();
```

### parallel by fork

```javascript
"use strict";

// q
var q = require("qiao-console");

// vars
var values = require("./_values.js");
var callback = require("./_callback.js");
var complete = require("./_complete.js");

// parallel
var parallel = require("qiao-parallel");

// test
(function () {
  q.clear();

  var jsPath = require("path").resolve(__dirname, "./fork-handler.js");
  parallel.parallelByFork(jsPath, values, callback, complete);
})();
```

## api

### cjs

```javascript
// parallel
var parallel = require("qiao-parallel");

// parallel by iife
parallel.parallelByIIFE(handler, values, callback, complete);

// parallel by fork
parallel.parallelByFork(jsPath, values, callback, complete);
```

### mjs

```javascript
// parallel
import { parallelByIIFE, parallelByFork } from "qiao-parallel";

// parallel by iife
parallelByIIFE(handler, values, callback, complete);

// parallel by fork
parallelByFork(jsPath, values, callback, complete);
```

## version

### 0.0.2.20220928

1. add eslint
2. add rollup
3. add readme

### 0.0.1.20220517

1. init
2. parallel by iife
3. parallel by fork
