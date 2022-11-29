## qiao-npms

[![npm version](https://img.shields.io/npm/v/qiao-npms.svg?style=flat-square)](https://www.npmjs.org/package/qiao-npms)
[![npm downloads](https://img.shields.io/npm/dm/qiao-npms.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-npms)

浏览器和 nodejs 下获取 npm 信息

## api

### downloadCountsLastDay

获取前一天的 npm 包下载量

```javascript
"use strict";

var q = require("qiao-npms");

var test = async function () {
  try {
    var packageName = "qiao-cos";
    var res = await q.downloadCountsLastDay(packageName);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

return

```javascript
{
  downloads: 0,
  start: '2022-06-08',
  end: '2022-06-08',
  package: 'qiao-cos'
}
```

### downloadCountsLastWeek

获取前一周的 npm 包下载量

```javascript
"use strict";

var q = require("qiao-npms");

var test = async function () {
  try {
    var packageName = "qiao-cos";
    var res = await q.downloadCountsLastWeek(packageName);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

return

```javascript
{
  downloads: 80,
  start: '2022-06-02',
  end: '2022-06-08',
  package: 'qiao-cos'
}
```

### downloadCountsLastMonth

获取前一月的 npm 包下载量

```javascript
"use strict";

var q = require("qiao-npms");

var test = async function () {
  try {
    var packageName = "qiao-cos";
    var res = await q.downloadCountsLastMonth(packageName);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

return

```javascript
{
  downloads: 763,
  start: '2022-05-10',
  end: '2022-06-08',
  package: 'qiao-cos'
}
```

### downloadCounts

获取 npm 包下载量

```javascript
"use strict";

var q = require("qiao-npms");

var test = async function () {
  try {
    var packageName = "qiao-cos";
    var res = await q.downloadCounts(packageName, "last-day");
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

return

```javascript
{
  downloads: 0,
  start: '2022-06-08',
  end: '2022-06-08',
  package: 'qiao-cos'
}
```

### getVersion

获取 npm 包最新版本号

```javascript
"use strict";

var q = require("qiao-npms");

var test = async function () {
  try {
    var packageName = "qiao-qrcode";
    var res = await q.getVersion(packageName);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### searchPackages

搜索 npm 包

```javascript
"use strict";

var q = require("qiao-npms");

var test = async function () {
  try {
    var packageName = "qiao-cos";
    var res = await q.searchPackages(packageName);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

test();
```

return

```javascript
[
  {
    name: 'qiao-cos',
    scope: 'unscoped',
    version: '0.4.3',
    description: 'tencent cos upload tool on nodejs',
    keywords: [ 'tencent', 'cos', 'upload', 'tool', 'nodejs' ],
    date: 2022-06-13T08:06:26.354Z,
    links: {
      npm: 'https://www.npmjs.com/package/qiao-cos',
      homepage: 'https://code.insistime.com/qiao-cos',
      repository: 'https://github.com/uikoo9/qiao-monorepo',
      bugs: 'https://github.com/uikoo9/qiao-monorepo/issues'
    },
    author: { name: 'uikoo9', email: 'uikoo9@qq.com' },
    publisher: { username: 'npm_insistime', email: 'npm@insistime.com' },
    maintainers: [ [Object] ]
  }
]
```

## version

### 0.0.3.20221021

1. get version

### 0.0.2.20220626

1. search packages

### 0.0.1.20220609

1. init project
2. download counts
