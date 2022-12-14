## qiao-log

[![npm version](https://img.shields.io/npm/v/qiao-log.svg?style=flat-square)](https://www.npmjs.org/package/qiao-log)
[![npm downloads](https://img.shields.io/npm/dm/qiao-log.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-log)

nodejs 下日志能力

## logger

```javascript
const Logger = require('qiao-log');
const logger = Logger(options);
```

## options

- log4jsConfig，[log4js](https://log4js-node.github.io/log4js-node/index.html)的配置
- intervalTime，写本地日志的间隔时间，用来限制写日志频次，单位 ms
- logContentLength，日志内容长度，用来限制日志内容长度

```javascript
const options = {
  intervalTime: 100,
  logContentLength: 200,
  log4jsConfig: {
    appenders: {
      out: { type: 'stdout' },
    },
    categories: {
      default: { appenders: ['out'], level: 'debug' },
    },
  },
};
```

## 使用 log4js 写日志

```javascript
logger.debug;
logger.info;
logger.warn;
logger.error;
```

## version

### 0.0.3.20221214

1. interval time
2. content length

### 0.0.2.20221202

1. 1.0.0

### 0.0.1.20220318

1. init project
2. add log
