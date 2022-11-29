## qiao-console

[![npm version](https://img.shields.io/npm/v/qiao-console.svg?style=flat-square)](https://www.npmjs.org/package/qiao-console)
[![npm downloads](https://img.shields.io/npm/dm/qiao-console.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-console)

nodejs 下 console 常见 api 封装

## api

### clear

```javascript
"use strict";

// qiao-console
const q = require("qiao-console");

q.clear();
```

### writeLine

```javascript
"use strict";

// qiao-console
const q = require("qiao-console");

q.clear();
q.writeLine(1, "hello");
```

### others

```javascript
"use strict";

// qiao-console
const q = require("qiao-console");

// clear line
q.clearLine();

// move to
q.moveTo(x, y);

// write
q.write(msg);

// write line xy
q.writeLineXY(x, y, msg);
```

## version

### 0.0.6.20221108

1. es6

### 0.0.5.20220422

1. add lerna

### 0.0.4.20210318

1. modify md

### 0.0.3.20201104

1. modify md
2. add other method

### 0.0.2.20200807

1. modify md

### 0.0.1.20200806

1. init project
2. clear
3. write line
