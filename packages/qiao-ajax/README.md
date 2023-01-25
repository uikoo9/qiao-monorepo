## qiao-ajax

[![npm version](https://img.shields.io/npm/v/qiao-ajax.svg?style=flat-square)](https://www.npmjs.org/package/qiao-ajax)
[![npm downloads](https://img.shields.io/npm/dm/qiao-ajax.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-ajax)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/qiao-ajax)

浏览器和 nodejs 下请求能力，基于[axios](https://axios-http.com/)

## api

### req

支持 get, post, put, patch, delete, head, options 等请求

```javascript
const { get } = require('qiao-ajax');
const res = await get(url);
```

### download

下载文件到本地

```javascript
const { download } = require('qiao-ajax');
await download(url, downloadPath);
```

## version

### 0.0.7.20221012

1. axios.default

### 0.0.6.20220510

1. ncu

### 0.0.5.20220415

1. qiao-webpack
2. lerna

### 0.0.4.20220412

1. ncu

### 0.0.3.20210215

1. ncu

### 0.0.2.20200820

1. md

### 0.0.1.20200819

1. init project
2. http method
3. qiao-ajax
