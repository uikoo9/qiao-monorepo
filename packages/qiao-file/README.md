## qiao-file

[![npm version](https://img.shields.io/npm/v/qiao-file.svg?style=flat-square)](https://www.npmjs.org/package/qiao-file)
[![npm downloads](https://img.shields.io/npm/dm/qiao-file.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-file)

nodejs 下文件相关封装

## install

安装

```bash
npm i qiao-file
```

## use

使用

```javascript
// cjs
const { isExists } = require('qiao-file');

// mjs
import { isExists } from 'qiao-file';
```

## cmd

复制，移动，删除文件或文件夹

### cp

复制文件或文件夹

```javascript
const res = await cp(src, dest);
```

### mv

移动文件或文件夹

```javascript
const res = await mv(src, dest);
```

### rm

删除文件或文件夹

```javascript
const res = await rm(path);
```

## dir

文件夹相关操作

### mkdir

创建文件夹

```javascript
const res = await mkdir(dirpath);
```

### readDir

读取文件夹内容

```javascript
const res = await readDir(dirpath);
```

### lsdir

列出文件夹下所有的文件和文件夹路径

```javascript
const res = await lsdir(dirpath);
```

### lstree

列出文件夹下所有的文件和文件夹信息，以树的方式

```javascript
const dirpath = 'xx';
const ignores = ['node_modules', 'is-'];
const res = await lstree(dirpath, ignores);
```

## file

文件相关操作

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

文件相关判断

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

### 0.1.6.20230307

1. 2.0.0

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
