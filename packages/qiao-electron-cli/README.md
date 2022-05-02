# qiao-electron-cli
[electron](https://www.electronjs.org/)打包工具，

使用[electron-packager](https://github.com/electron/electron-packager)打包应用，

使用[electron-installer-dmg](https://github.com/electron-userland/electron-installer-dmg)打包dmg安装包

## qe.config.js
```javascript
'use strict';

// 主进程下的package.json
const srcPkg = require('../src/app/package.json');

// config
let config = {
	// app环境，online，test之类的，会拼接在dmg安装包名上
    appEnv          : 'online',
	
	// app名称，默认从主进程下的package.json中获取
    appName         : srcPkg.name,
	
	// app版本号，会显示在dmg安装包名以及关于面板上，默认从主进程下的package.json中获取
    appVersion      : srcPkg.version,
	
	// app应用图标
    appIconPath     : 'pack/static/icon/icon.icns',
	
	// app权限声明，会显示在关于面板上
    appCopyright    : 'Copyright © 2022 xxx版权所有',

	// app操作系统，详见https://electron.github.io/electron-packager/main/interfaces/electronpackager.options.html#arch
    arch            : 'arm64',
	
	// app应用包中的app文件夹是否使用asar格式，默认为true
    asar            : true,

	// app中主进程src路径
    srcPath         : 'src/app',
	
	// 最终要打包到app应用包中的文件和文件夹，在dist这一步会复制出去
    srcFiles        : [ 
        'main',
        'node_modules',
        'renderer',
        'package.json'
    ],
	
	// srcFiles中的文件和文件夹会复制到这个目录
    distPath        : 'dist',
	
	// app应用包及dmg安装包生成的路径
    outPath         : 'out',
	
	// app安装包dmg中的背景图
    dmgBackground   : 'pack/static/bg.png',
};

// cos config，可以配置cos，直接上传到cos上
const cosConfig     = require('./cos-config.json');
config.cosConfig    = {
    SecretId	: cosConfig.SecretId,
    SecretKey	: cosConfig.SecretKey,
    Region	    : cosConfig.Region,
    Bucket	    : cosConfig.Bucket,
    destPath    : 'xx/xx/xx/',
};

// qe config
module.exports = config;
```

## cli
### dist
```shell
qelectron dist|d        /{yourconfigpath}/qe.config.js
```

### packmac
```shell
qelectron packmac|pm 	/{yourconfigpath}/qe.config.js
```

### packdmg
```shell
qelectron packdmg|pd 	/{yourconfigpath}/qe.config.js
```

### uploaddmg
```shell
qelectron uploaddmg|ud 	/{yourconfigpath}/qe.config.js
```

## version
### 0.0.4.20220502
1. qe config

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