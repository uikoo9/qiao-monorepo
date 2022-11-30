## qiao-electron

[![npm version](https://img.shields.io/npm/v/qiao-electron.svg?style=flat-square)](https://www.npmjs.org/package/qiao-electron)
[![npm downloads](https://img.shields.io/npm/dm/qiao-electron.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-electron)

封装了一些常见的 electron 主进程操作，详见：[一篇文章学会 Electron](https://blog.insistime.com/electron)

## install

```bash
npm i qiao-electron
```

## ipc

提供了一些在渲染进程中可以使用的常见方法

### appGetVersionIPC

```javascript
// 获取app版本号
const res = await window.electron.appGetVersionIPC();
```

### darkModeChangeIPC

```javascript
// 监听mac下黑夜模式的变化
darkModeChangeIPC((isDark) => {
  console.log(isDark);
});
```

### darkModeGetIPC

```javascript
// 获取mac下当前的黑夜模式状态
const res = await window.electron.darkModeGetIPC();
```

### darkModeGetIPC

```javascript
// 获取mac下当前的黑夜模式状态
const res = await window.electron.darkModeGetIPC();
```

### dialogOpenFolderIPC

```javascript
// 打开选择文件夹的dialog，如果选择了文件夹，返回具体的path
const res = await window.electron.dialogOpenFolderIPC();
```

### fsRmIPC

```javascript
// 删除文件或文件夹
const res = await window.electron.fsRmIPC(rmPath);
```

### fsMkdirIPC

```javascript
// 创建一个文件夹
const res = await window.electron.fsMkdirIPC(dir);
```

### fsRenameIPC

```javascript
// 重命名一个文件或文件夹
const res = await window.electron.fsRenameIPC(oldPath, newPath);
```

### fsGetTreeIPC

```javascript
// 获取某个文件夹下的文件树
const res = await window.electron.fsGetTreeIPC(dir, ignores);
```

### fsReadFileIPC

```javascript
// 获取某个文件的内容，直接返回
const res = await window.electron.fsReadFileIPC(filePath);
```

### fsWriteFileIPC

```javascript
// 写一个文件
const res = await window.electron.fsWriteFileIPC(filePath, fileData);
```

### logIPC

```javascript
// 写本地日志
const res = await window.electron.logIPC(msg, type);
```

### lsAllIPC

```javascript
// 获取本地文件维护的key-value所有值
const res = await window.electron.lsAllIPC();
```

### lsGetIPC

```javascript
// 获取本地文件维护的key对应的value值
const res = await window.electron.lsGetIPC(key);
```

### lsSetIPC

```javascript
// 设置本地文件维护的key-value，value可以直接传对象，不用序列化
const res = await window.electron.lsSetIPC(key, value);
```

### lsDelIPC

```javascript
// 删除本地文件维护的key对应的value值
const res = await window.electron.lsDelIPC(key);
```

### shellOpenUrlIPC

```javascript
// 打开一个外部的url
const res = await window.electron.shellOpenUrlIPC(url);
```

### shellShowPathIPC

```javascript
// 打开本地的文件或者文件夹的位置
const res = await window.electron.shellShowPathIPC(path);
```

### shortcutGlobalIPC

```javascript
// 注册全局快捷键
const res = await window.electron.shortcutGlobalIPC(shortcutKey, shortcutCallbackName);
```

### windowResizeIPC

```javascript
// resize窗口大小
const res = await window.electron.windowResizeIPC(width, height);
```

## main

封装一些主进程直接使用的方法

### dialogOpenFolder

```javascript
// 打开一个选择文件夹的dialog
const res = dialogOpenFolder(options);
```

### logInit

```javascript
// 在本地logs文件夹下生成一个date型的electron.log文件，并返回logger
const log = logInit();
```

### ls

```javascript
// 获取本地文件维护的key-value操作对象ls
const ls = ls();
```

### setAboutVersion

```javascript
// 设置关于面板中的版本号
setAboutVersion(version);
```

### setApplicationMenu

```javascript
// 设置系统菜单，如果不传menus会有默认的菜单
setApplicationMenu();
```

### shellOpenURL

```javascript
// 打开一个外部的url
shellOpenURL(url);
```

### shellShowPath

```javascript
// 打开指定path的文件位置或者文件夹位置
shellShowPath(path);
```

### shortcutReg

```javascript
// 注册全局快捷键
shortcutReg(shortcutKey, shortcutCallback);
```

### shortcutUnReg

```javascript
// 注销全局快捷键
shortcutUnReg(shortcutKey);
```

### windowOpenByFile

```javascript
// 通过本地文件打开一个window
windowOpenByFile(filePath, options, supportNode);
```

### windowOpenByUrl

```javascript
// 通过url打开一个window
windowOpenByUrl(url, options, supportNode, isDev);
```

### windowOpenByUrlAndFile

```javascript
// dev下通过url打开window，非dev通过本地文件打开window
windowOpenByUrlAndFile(urlPath, filePath, options);
```

### windowOpenByUrlAndFile

```javascript
// 通过ipc的event获取对应的window
windowGetByEvent(event);
```

## version

### 0.2.0.20220506

1. windowGetByEvent

### 0.1.9.20220503

1. md

### 0.1.8.20220420

1. fs rename
2. fs rm
3. get preloads
4. shell open path

### 0.1.7.20220419

1. add fs
2. init ipc
3. read file

### 0.1.6.20220415

1. add lerna

### 0.1.5.20220412

1. open window by url dev

### 0.1.4.20220411

1. qiao.util.file

### 0.1.3.20220408

1. modify data
2. show tables
3. drop table
4. dialog open

### 0.1.2.20220407

1. shortcut un reg
2. db
3. json
4. delete data

### 0.1.1.20220406

1. window resize to
2. open window by url and file
3. shortcut reg

### 0.1.0.20220402

1. db
2. sqlite

### 0.0.9.20220401

1. open window by url

### 0.0.8.20220331

1. log init
2. app get version
3. shortcut
4. darkmode
5. darkmode get

### 0.0.7.20220330

1. del log
2. shell open url
3. ls

### 0.0.6.20220323

1. del sentry
2. add sentry

### 0.0.5.20220321

1. window ready to show

### 0.0.4.20220319

1. ipc log
2. init sentry

### 0.0.3.20220318

1. add log

### 0.0.2.20220317

1. open window by file
2. add window

### 0.0.1.20220309

1. init project
2. add jsdoc
3. add jest
4. is mac
5. add menu
6. set about version
