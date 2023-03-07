## qiao-file

[![npm version](https://img.shields.io/npm/v/qiao-file.svg?style=flat-square)](https://www.npmjs.org/package/qiao-file)
[![npm downloads](https://img.shields.io/npm/dm/qiao-file.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-file)

nodejs 下文件相关封装

## install

```bash
npm i qiao-file
```

## use

```javascript
// cjs
const { isExists } = require('qiao-file');

// mjs
import { isExists } from 'qiao-file';
```

## cmd

### cp

```javascript
'use strict';

var q = require('qiao-file');

var test = function () {
  var folderPath = './test/';
  var filePath = './qiao-file.js';

  // cp folder
  q.cp(folderPath, './test1');

  // cp file
  q.cp(filePath, './1.js');
};

test();
```

### mv

```javascript
'use strict';

var q = require('qiao-file');

var test = function () {
  var oldPath = './test';
  var newPath = './test1';

  var res = q.mv(oldPath, newPath);
  console.log(res);
};

test();
```

### rm

```javascript
'use strict';

var q = require('qiao-file');

var test = function () {
  var folderPath = 'd:/test1/';
  var filePath = 'd:/test.png';

  // rm folder
  q.rm(folderPath);

  // rm file
  q.rm(filePath);
};

test();
```

## dir

### lsdir

```javascript
'use strict';

var q = require('qiao-file');

var test = function () {
  var foldersAndFiles = q.lsdir('z:/workspaces/qiao.plugin.coder/');
  console.log(foldersAndFiles);
};

test();
```

### lstree

```javascript
'use strict';

var q = require('qiao-file');

var test = function () {
  var fileTree = q.lstree('./', ['node_modules']);
  console.log(JSON.stringify(fileTree));
};

test();
```

### mkdir

```javascript
'use strict';

var q = require('qiao-file');

var test = function () {
  var folder = 'd:/test1/test2/test3/test.js';

  q.mkdir(folder);
};

test();
```

## file

### extname

获取文件的后缀

```javascript
const res = extname(filePath);
```

### readFile

读取文件内容

```javascript
const res = await readFile(filePath);
```

### readFileLineByLine

按行读取文件

```javascript
readFileLineByLine(filePath, onLine, onClose);
```

### writeFile

写文件

```javascript
const res = await writeFile(filePath, 'sth');
```

## is

### isDir

判断文件路径是否为文件夹

```javascript
const res = await isDir(fpath);
```

### isExists

判断文件或者文件夹是否存在

```javascript
const res = await isExists(fpath);
```

## version

### 0.1.5.20221008

1. 1.0.0

### 0.1.4.20220707

1. write file from lines
2. read file line by line
3. read file line by line sync

### 0.1.3.20220420

1. lstree path name
2. mv
3. write file

### 0.1.2.20220419

1. es6
2. add lstree
3. read file

### 0.1.1.20220417

1. add lerna

### 0.1.0.20220317

1. add cp

### 0.0.9.20191204

1. add funding

### 0.0.8.20191011

1. exports.fs
2. exports.path

### 0.0.7.20190122

1. modify md

### 0.0.6.20190117

1. extname to lower case
2. add lsdir
3. add rm

### 0.0.5.20190107

1. nodejs file tool

### 0.0.4.20181127

1. modify method name
2. add .js

### 0.0.3.20181122

1. npm audit

### 0.0.2.20181017

1. isExists
2. extname
3. mkdir
4. getAllFiles

### 0.0.1.20181016

1. init
