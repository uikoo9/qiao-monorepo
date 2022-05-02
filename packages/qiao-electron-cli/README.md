# qiao-electron-cli
[electron](https://www.electronjs.org/)打包工具，使用[electron-packager](https://github.com/electron/electron-packager)打包应用，使用[electron-installer-dmg](https://github.com/electron-userland/electron-installer-dmg)打包dmg安装包

## config
### appEnv
app环境，online，test之类的，会拼接在dmg安装包名上

### appName
app名称

### appVersion
app版本号，会显示在dmg安装包名以及关于面板上

### appIconPath
app应用图标

### appCopyright
app权限声明，会显示在关于面板上

### arch
app操作系统，详见[arch](https://electron.github.io/electron-packager/main/interfaces/electronpackager.options.html#arch)

### asar
app应用包中的app文件夹是否使用asar格式，默认为true

### srcPath
app中主进程src路径

### srcFiles
最终要打包到app应用包中的文件和文件夹，在dist这一步会复制出去

### distPath
srcFiles中的文件和文件夹会复制到这个目录

### outPath
app应用包及dmg安装包生成的路径

### dmgBackground
app安装包dmg中的背景图

## cli
### dist
```shell
qelectron dist|d    /{yourconfigpath}/dist.config.js
```

### packmac
```shell
qelectron packmac|pm 	/{yourconfigpath}/packmac.config.js
```

### packdmg
```shell
qelectron packdmg|pd 	/{yourconfigpath}/packdmg.config.js
```

### uploaddmg
```shell
qelectron uploaddmg|ud 	/{yourconfigpath}/uploaddmg.config.js
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

