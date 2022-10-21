## qiao-qrcode

[![npm version](https://img.shields.io/npm/v/qiao-qrcode.svg?style=flat-square)](https://www.npmjs.org/package/qiao-qrcode)
[![npm downloads](https://img.shields.io/npm/dm/qiao-qrcode.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-qrcode)

浏览器生成二维码

## install
```bash
npm i qiao-qrcode
```

## api
### qrcodeCanvas

用canvas生成二维码

```javascript
// q
var q = require('qiao-qrcode');

// canvas
// <div id="canvas"></div>
q.qrcodeCanvas('canvas', 'https://insistime.com/');
```

### qrcodeImg

用img生成二维码

```javascript
// q
var q = require('qiao-qrcode');

// img
// <div id="img"></div>
q.qrcodeImg('img', 'https://insistime.com/');
```

### qrcodeSvg

用svg生成二维码

```javascript
// q
var q = require('qiao-qrcode');

// url
var url = 'https://insistime.com/';

// svg
// <div id="svg"></div>
q.qrcodeSvg('svg', 'https://insistime.com/');
```

## version
### 0.0.3.20221021
1. add eslint
### 0.0.2.20220415
1. add lerna

### 0.0.1.20220414
1. init project