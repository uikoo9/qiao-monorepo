# qiao-monorepo

## lerna
```bash
npm i -g lerna
```

## usage

### clean

清空所有包下的node_modules

```bash
npm run clean
```

### init

安装所有包下的依赖包

```bash
npm run init
```

### check

通过[npm-check-updates](https://www.npmjs.com/package/npm-check-updates)检查所有包下的依赖是否有更新

```bash
npm run check
```

### pkg

列出所有包下的dependencies

```bash
npm run pkg
```

### dpkg

列出所有包下的devDependencies

```bash
npm run dpkg
```

### ls

列出所有包信息

```bash
npm run ls
```

### show

列出所有包详细信息

```bash
npm run show
```

## Browser

### [qiao.db.js](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao.db.js#readme)

浏览器 IndexedDB 数据库常见 api 封装

### [qiao.ls.js](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao.ls.js#readme)

浏览器 LocalStorage 本地存储常见 api 封装

### [qiao-easyui](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-easyui#readme)

[jquery-easyui](http://www.jeasyui.com)库常见 api 封装

### [qiao-index](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-index#readme)

浏览器下官网首页模版

### [qiao-is-online-browser](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-is-online-browser#readme)

浏览器检测用户是否在线

### [qiao-qrcode](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-qrcode#readme)

浏览器生成二维码

### [qiao-webpack](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-webpack#readme)

[webpack](https://webpack.js.org)脚手架

### [qiao-weixinx](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-weixinx#readme)

[微信小程序](https://mp.weixin.qq.com/cgi-bin/wx)常见 api 封装

## Browser & [Node.js](https://nodejs.org/zh-cn/)

### [qiao-ajax](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-ajax#readme)

浏览器和 nodejs 下请求能力，by [axios](https://axios-http.com)

### [offline-to-online](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/offline-to-online#readme)

浏览器和 nodejs 下检测用户从离线到在线

### [qiao-get-ip](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-get-ip#readme)

浏览器和 ndoejs 下获取公网 ip

### [qiao-slink](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-slink#readme)

浏览器和 nodejs 下生成短链接，by [tiyee](https://tiyee.cn)

## [Node.js](https://nodejs.org/zh-cn/)

### [qiao-cache](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-cache#readme)

nodejs 下 cache 能力

### [qiao-cli](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-cli#readme)

nodejs 下 cli 能力

### [qiao-coder](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-coder#readme)

nodejs 下 qiao-server 配套的代码生成工具，待完善

### [qiao-compress](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-compress#readme)

nodejs 下压缩&解压缩能力，待完善

### [qiao-config](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-config#readme)

nodejs 下基于本地文件的 config 能力

### [qiao-console](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-console#readme)

nodejs 下 console 常见 api 封装

### [qiao-cos](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-cos#readme)

nodejs 下腾讯 cos 常见 api 封装

### [qiao-encode](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-encode#readme)

nodejs 下加密，随机等能力

### [qiao-file](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-file#readme)

nodejs 下文件相关封装

### [qiao-is-online](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-is-online#readme)

nodejs 下判断是否在线

### [qiao-json](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-json#readme)

nodejs 下 qiao-server 中的 json 数据结构

### [qiao-lerna](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-lerna#readme)

lerna 相关工具

### [qiao-log](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-log#readme)

nodejs 下日志能力

### [qiao-mysql](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-mysql#readme)

nodejs 下 mysql 能力

### [qiao-oss](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-oss#readme)

nodejs 下阿里云 oss 常见 api 封装

### [qiao-parallel](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-parallel#readme)

nodejs 下并行执行能力

### [qiao-ping](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-ping#readme)

nodejs 下 ping 能力

### [qiao-process](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-process#readme)

nodejs 下 process 能力

### [qiao-request](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-request#readme)

nodejs 下 request 常见 api 封装

### [qiao-server](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-server#readme)

nodejs 下基于 express 的 mvc 框架

### [qiao-server-user](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-server-user#readme)

nodejs 下 qiao-server 中 user 部分

### [qiao-sms](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-sms#readme)

nodejs 下腾讯云 sms 常见 api 封装

### [qiao-string](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-string#readme)

nodejs 下 qiao-server 中的 string 相关工具类

### [qiao-timer](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-timer#readme)

nodejs 下 timer 能力

### [qiao-upload](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-upload#readme)

nodejs 下 qiao-server 中 upload 部分，待完善

### [qiao-weixin](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-weixin#readme)

nodejs 下 qiao-server 中微信鉴权部分

### [qiao-zip](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-zip#readme)

nodejs 下 zip&unzip 能力

## [Electron](https://www.electronjs.org/)

### [qiao-electron](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-electron#readme)

electron 常见 api 封装

### [qiao-electron-cli](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-electron-cli#readme)

electron 脚手架

### [qiao-regedit](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-regedit#readme)

windows 注册表常见 api 封装

### [qiao-sqlite](https://github.com/uikoo9/qiao-monorepo/tree/master/packages/qiao-sqlite#readme)

本地数据库 sqlite 常见 api 封装
