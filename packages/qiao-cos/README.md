## qiao-cos

[![npm version](https://img.shields.io/npm/v/qiao-cos.svg?style=flat-square)](https://www.npmjs.org/package/qiao-cos)
[![npm downloads](https://img.shields.io/npm/dm/qiao-cos.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-cos)

nodejs 下腾讯云 cos 常见 api 封装

## install

安装

```bash
npm i qiao-cos
```

## config.json

配置文件

```javascript
{
    "SecretId": "your secret id",
    "SecretKey": "your secret key",
    "Region": "your bucket",
    "Bucket": "your bucket",
}
```

## cli

也可以在 cli 下使用

```bash
# 全局安装
npm i -g qiao-cos

# 帮助
qcos
qcos -h

# 上传文件
qcos file|fi z:/workspaces/qiao-cos/test/config.json d:/test.js test.js

# 上传文件夹
qcos folder|fo z:/workspaces/qiao-cos/test/config.json d:/test/cocos test9
```

## api

### use

使用

```javascript
// cjs
const { uploadFile, uploadFolder } = require('qiao-cos');

// mjs
import { uploadFile, uploadFolder } from 'qiao-cos';
```

### qcos

```javascript
// config
const config = require('./config.json');

// qiao-cos
const qcos = require('qiao-cos')(config);
```

### uploadFile

同步上传文件

```javascript
const destPath = 'test/test.js';
const sourceFile = '/your/test.js';

const rs = await qcos.uploadFile(destPath, sourceFile);
console.log(rs);
```

### uploadFolder

同步上传文件夹

```javascript
const destPath = 'test';
const sourceFolder = '/your/folder';

const rs = await qcos.uploadFolder(destPath, sourceFolder);
console.log(rs);
```

## version

### 0.1.2.20230315

1. 2.0.0

### 0.1.1.20221108

1. es6

### 0.1.0.20220401

1. ncu

### 0.0.9.20200718

1. ncu

### 0.0.8.20200403

1. ncu

### 0.0.7.20191219

1. fix folderPath bug

### 0.0.6.20191206

1. add funding
2. update packages

### 0.0.5.20190808

1. cos-nodejs-sdk-v5@2.5.9
2. qiao-cli@0.0.8

### 0.0.4.20190622

1. qcos fix ./

### 0.0.3.20190529

1. check region and bucket

### 0.0.2.20190130

1. upload file async
2. upload file sync
3. upload folder async
4. upload folder sync
5. modify qcos
6. 优化代码，并行上传

### 0.0.1.20190128

1. 初始化项目
2. upload file
3. upload folder
4. qcos ok
5. modify md
6. modify qiao-cos
7. bin qcos
