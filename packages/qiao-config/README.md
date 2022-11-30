## qiao-config

[![npm version](https://img.shields.io/npm/v/qiao-config.svg?style=flat-square)](https://www.npmjs.org/package/qiao-config)
[![npm downloads](https://img.shields.io/npm/dm/qiao-config.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-config)

nodejs 下基于本地文件的 config 能力

## install

```bash
npm i qiao-config
```

## db

```javascript
// default
const db = require('qiao-config')();

// custom
const db = require('qiao-config')('your path');
```

## api

### all

```javascript
db.all();
```

### clear

```javascript
db.clear();
```

### config

```javascript
// get
db.config(key);

// set
db.config(key, value);

// del
db.config(key, null);
```

## version

### 0.0.4.20221118

1. 1.0.0

### 0.0.3.20201105

1. c --> config
2. custom path

### 0.0.2.20200901

1. del ok
2. c ok
3. md

### 0.0.1.20200828

1. init project
2. get ok
3. set ok
4. all ok
5. clear ok
