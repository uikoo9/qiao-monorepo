# devtools
QQ小程序开发者工具Electron版本，壳项目

## 项目介绍
所谓壳项目，就是提供了electron壳，打包，及开发环境的项目，也是整个QQ小程序开发者工具Electron版本的主项目

## 文件介绍
```bash
devtools-dist，存放devtools-src构建后的产物
devtools-out，存放devtools应用打包后的产物，比如mac应用，dmg文件等
devtools-pack，存放devtools打包相关的脚本和配置
devtools-src，存放devtools源码，包括主进程和渲染进程两个子项目的代码
	|--devtools-app，存放devtools主进程的源码，子项目，使用git submodule引入
	|--devtools-renderer，存放devtools渲染进程的源码，子项目，使用git submodule引入
```

## 环境统一
```bash
为了避免不必要的问题，请保证各环境统一
nodejs版本：v16.14.2，可以使用n来切换版本
npm版本：v8.5.0，可以使用nrm来配置npm源
electron版本：v18.0.3
```

## 项目初始化
```bash
# clone
git clone git@git.woa.com:QQMiniApp/qqminiapp-devtools/devtools.git ./devtools
cd devtools

# submodule
git submodule init
git submodule update

# npm init
npm run init-all

# npm init for mac m1
npm run init-all-m1
```

## 子项目开发
```bash
# 可以进入两个子项目，单独开窗口开发
cd devtools-src/devtools-app
code .

cd devtools-src/devtools-renderer
code .
```

## 本地开发
```bash
# 渲染进程项目较为稳定的时候
npm run build
npm start

# 渲染进程较为稳定时
# 先在渲染进程，以webpack devserver启动项目
cd devtools-src/devtools-renderer
npm run dev

# 然后在主项目启动dev调试
npm run dev
```

## 本地打包mac应用
```bash
npm run packmac
```

## 本地打包dmg
```bash
npm run packdmg
```

## upload dmg
```bash
npm run uploaddmg
```

## version
### 0.2.2.20220502
1. del dist config
2. del packmac config
3. del packdmg config
4. del app config
5. pack checker

### 0.2.1.20220501
1. ncu
2. qe dist
3. qe pack mac
4. qe pack dmg

### 0.2.0.20220425
1. project open index
2. index layout

### 0.1.9.20220424
1. login ui ok

### 0.1.8.20220423
1. project setting
2. project userinfo
3. project list

### 0.1.7.20220420
1. fs rename
2. fs rm
3. fs mkdir
4. fs write file
5. _preload
6. add core folder
7. init ipc
8. init app
9. shell show path

### 0.1.6.20220419
1. fsTree
2. ipc init
3. read file

### 0.1.5.20220418
1. add lerna

### 0.1.4.20220415
1. vos.view.login

### 0.1.3.20220414
1. qiao-qrcode

### 0.1.2.20220413
1. login ok
2. open login or project

### 0.1.1.20220408
1. project del ids
2. project save
3. open folder

### 0.1.0.20220407
1. shortcut del
2. shortcut reset
3. db project ok

### 0.0.9.20220406
1. window resize
2. open setting window
3. open window by url and file
4. shortcut reg ok
5. app relaunch

### 0.0.8.20220403
1. open window

### 0.0.7.20220402
1. db

### 0.0.6.20220401
1. npm dev
2. upload dmg
3. open window by url
4. menu ok
5. menu quit

### 0.0.5.20220331
1. init log
2. app get version
3. shortcut
4. darkmode
5. darkmode get

### 0.0.4.20220330
1. ipc get app version
2. electron config json
3. ipc log
4. preload.js
5. es6
6. ipc to index
7. ipc ls
8. shell open url

### 0.0.3.20220323
1. ipc get app version
2. add sentry
3. add index window
4. preload

### 0.0.2.20220322
1. login html
2. bg color

### 0.0.1.20220321
1. init project
2. add husky
3. 替换mac应用的icon
4. 替换dmg的背景图
5. 修改应用名称
6. 窗口ready后在显示
7. 修改窗口大小
8. 修改窗口为不可改变大小
9. 隐藏默认标题栏 
