## qiao-log

[![npm version](https://img.shields.io/npm/v/qiao-log.svg?style=flat-square)](https://www.npmjs.org/package/qiao-log)
[![npm downloads](https://img.shields.io/npm/dm/qiao-log.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-log)

nodejs 下日志能力

## stdout

```javascript
// q
const { getLogger } = require('qiao-log');

// logger
const logger = getLogger();

// log
logger.debug('1');
```

## datefile

```javascript
// q
const { getLogger } = require('qiao-log');

// config
const config = {
  appenders: ['datefileLog'],
};

// logger
const logger = getLogger(config);

// log
logger.debug('1');
```

## all

```javascript
// q
const { getLogger } = require('qiao-log');

// config
const config = {
  appenders: ['stdoutLog', 'datefileLog'],
};

// logger
const logger = getLogger(config);

// log
logger.debug('1');
```

## filepath

```javascript
// q
const { getLogger } = require('qiao-log');

// config
const config = {
  appenders: ['stdoutLog', 'datefileLog'],
  fileName: '../test.log',
};

// logger
const logger = getLogger(config);

// log
logger.debug('1');
```

## close

```javascript
// q
const { getLogger, close } = require('qiao-log');

// config
const config = {
  appenders: ['stdoutLog', 'datefileLog'],
  fileName: '../test.log',
};

// logger
const logger = getLogger(config);

// log
logger.debug('1');

// close
close(() => {
  console.log('logger close');
});
```

## version

### 0.0.2.20221202

1. 1.0.0

### 0.0.1.20220318

1. init project
2. add log
