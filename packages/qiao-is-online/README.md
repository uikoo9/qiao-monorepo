## qiao-is-online

[![npm version](https://img.shields.io/npm/v/qiao-is-online.svg?style=flat-square)](https://www.npmjs.org/package/qiao-is-online)
[![npm downloads](https://img.shields.io/npm/dm/qiao-is-online.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-is-online)

nodejs 检测用户是否在线

- [一篇文章判断用户是否在线](https://blog.insistime.com/is-online)

## install

安装

```shell
npm i qiao-is-online
```

## use

使用

```javascript
// cjs
const { isOnline } = require('qiao-is-online');

// mjs
import { isOnline } from 'qiao-is-online';
```

## api

### isOnline

是否在线

- stritMode
  - 类型: boolean
  - 说明: 是否启用严格模式，默认为 false
- return
  - 类型: string
  - 说明: 是否在线, 'online', 'offline'

```javascript
await q.isOnline();

// strict mode, all hosts alive return online
await q.isOnline(true);
```

### offlineToOnline

从离线到在线

- callback
  - 类型: function
  - 说明: 从离线到在线的回调函数
- intervalTime
  - 类型: number
  - 说明: 检测在线状态的间隔时间，单位 ms，默认为 3000ms

```javascript
offlineToOnline(callback, intervalTime);
```
