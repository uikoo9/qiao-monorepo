## qiao-cos
[![npm version](https://img.shields.io/npm/v/qiao-cos.svg?style=flat-square)](https://www.npmjs.org/package/qiao-cos)
[![npm downloads](https://img.shields.io/npm/dm/qiao-cos.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-cos)

nodejs下腾讯云cos常见api封装

## install
```bash
npm i -g qiao-cos
```

## cli
```bash
# 帮助
qcos
qcos -h

# 上传文件
qcos file|fi z:/workspaces/qiao-cos/test/config.json d:/test.js test.js	

# 上传文件夹
qcos folder|fo	z:/workspaces/qiao-cos/test/config.json d:/test/cocos test9
```

## config.json
```javascript
{
    "SecretId": "your secret id",
    "SecretKey": "your secret key",
    "Region": "your bucket",
    "Bucket": "your bucket",
}
```

## use
```javascript
// config
const config = require('./config.json');

// q
const q = require('../index.js')(config);

// use
q.uploadfile
```

## api
### uploadFileSync

同步上传文件

```javascript
const q = require('qiao-cos');
const client = q.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
const test = async function () {
    try {
        const destPath = 'test/test.js';
        const sourceFile = 'd:/test.js';

        const rs = await q.uploadFileSync(client, destPath, sourceFile);
        console.log(rs);
    } catch (e) {
        console.log(e);
    }
};

test();
```

### uploadFolderSync

同步上传文件夹

```javascript
const q = require('qiao-cos');
const client = q.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
const test = async function () {
    try {
        const destPath = 'static';
        const sourceFolder = 'd:/static';

        const rs = await q.uploadFolderSync(client, destPath, sourceFolder);
        console.log(rs);
    } catch (e) {
        console.log(e);
    }
};

test();
```

### uploadFile

异步上传文件

```javascript
const q = require('qiao-cos');
const client = q.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
const test = function () {
    const destPath = 'test/test.js';
    const sourceFile = 'd:/test.js';

    q.uploadFile(client, destPath, sourceFile, function (err, data) {
        console.log(err, data);
    });
};

test();
```

### uploadFolder

异步上传文件夹

```javascript
const q = require('qiao-cos');
const client = q.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
const test = function () {
    const destPath = 'static';
    const sourceFolder = 'd:/static';

    q.uploadFolder(client, destPath, sourceFolder, function (rs) {
        console.log(rs);
    });
};

test();
```

## version
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
