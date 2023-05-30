## qiao-ajax

[![npm version](https://img.shields.io/npm/v/qiao-ajax.svg?style=flat-square)](https://www.npmjs.org/package/qiao-ajax)
[![npm downloads](https://img.shields.io/npm/dm/qiao-ajax.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-ajax)

浏览器和 nodejs 下请求能力，基于[axios](https://axios-http.com/)

## api

### req

支持 get, post, put, patch, delete, head, options 等请求

```javascript
const { get } = require('qiao-ajax');
const res = await get(url);
```
