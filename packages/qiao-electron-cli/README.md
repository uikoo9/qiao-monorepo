## qiao-electron-cli

[![npm version](https://img.shields.io/npm/v/qiao-electron-cli.svg?style=flat-square)](https://www.npmjs.org/package/qiao-electron-cli)
[![npm downloads](https://img.shields.io/npm/dm/qiao-electron-cli.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-electron-cli)

electron 脚手架，详见：[一篇文章学会 Electron](https://blog.insistime.com/electron)

## install

```bash
npm i -D qiao-electron-cli
```

## config

配置文件 qiao-electron.config.js

```javascript
'use strict';

// 主进程下的package.json
const srcPkg = require('../src/app/package.json');

// config
let config = {
  // app环境，online，test之类的，会拼接在dmg安装包名上
  appEnv: 'online',

  // app名称，默认从主进程下的package.json中获取
  appName: srcPkg.name,

  // app版本号，会显示在dmg安装包名以及关于面板上，默认从主进程下的package.json中获取
  appVersion: srcPkg.version,

  // app应用图标，mac下自动寻找icon.icns，windows下自动寻找icon.ico
  appIconPath: 'pack/icon/icon',

  // app权限声明，会显示在关于面板上
  appCopyright: 'Copyright © 2022 xxx版权所有',

  // app操作系统，详见https://electron.github.io/electron-packager/main/interfaces/electronpackager.options.html#arch
  arch: 'arm64',

  // app应用包中的app文件夹是否使用asar格式，默认为false
  asar: false,

  // app中主进程src路径
  srcPath: 'src',

  // 最终要打包到app应用包中的文件和文件夹，在dist这一步会复制出去
  srcFiles: ['main', 'node_modules', 'renderer', 'package.json'],

  // srcFiles中的文件和文件夹会复制到这个目录
  distPath: 'dist',

  // app应用包及dmg安装包生成的路径
  outPath: 'out',

  // app安装包dmg中的背景图，不填则使用默认背景图
  dmgBackground: 'pack/static/bg.png',
};

// cos config，可以配置cos，直接上传到cos上
const cosConfig = require('./cos-config.json');
config.cosConfig = {
  SecretId: cosConfig.SecretId,
  SecretKey: cosConfig.SecretKey,
  Region: cosConfig.Region,
  Bucket: cosConfig.Bucket,
  destPath: 'xx/xx/xx/',
};

// qe config
module.exports = config;
```

## cli

### init

初始化一个 electron 项目

```bash
qelectron init /{youprojectpath}
```

### icns

生成 mac 下的 icns 图标

```bash
qelectron icns /{youprojectpath}/static/icon/pic.png
```

### dist

复制 electron src 文件到 dist 文件夹

```bash
qelectron dist|d /{yourconfigpath}/qiao-electron.config.js
```

### packmac

打包 mac 下应用

```bash
qelectron packmac|pm /{yourconfigpath}/qiao-electron.config.js
```

### packdmg

打包 mac 下安装包 dmg 文件

```bash
qelectron packdmg|pd /{yourconfigpath}/qiao-electron.config.js
```

### uploaddmg

上传 dmg 文件到 cos

```bash
qelectron uploaddmg|ud /{yourconfigpath}/qiao-electron.config.js
```

## version

### 0.0.7.20221020

1. pack win

### 0.0.6.20221019

1. 1.0.0

### 0.0.5.20220503

1. mac icns

### 0.0.4.20220502

1. qe config
2. qe init

### 0.0.3.20220401

1. upload dmg

### 0.0.2.20220317

1. 拆分代码
2. add dist
3. add dist cli

### 0.0.1.20220311

1. init project
2. pack mac
3. pack mac return path
4. pack dmg
