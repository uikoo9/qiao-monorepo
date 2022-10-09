# qiao-z
[![npm version](https://img.shields.io/npm/v/qiao-z.svg?style=flat-square)](https://www.npmjs.org/package/qiao-z)
[![npm downloads](https://img.shields.io/npm/dm/qiao-z.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-z)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/qiao-z)

nodejs web app framework

## 安装
```bash
npm i qiao-z
```

## 使用
```javascript
// app
const app = require('qiao-z')();

// listen
app.listen(5277);
```

## req
### req.url

获取解析后的url

```javascript
{
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: '/',
  _raw: '/'
}
```

### req.headers

获取headers

```javascript
{
  Host: 'localhost:5277',
  Connection: 'keep-alive',
  'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'Sec-Fetch-Site': 'none',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-User': '?1',
  'Sec-Fetch-Dest': 'document',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-CN,zh;q=0.9',
  Cookie: ''
}
```

## res
### res.redirect

重定向

```javascript
res.redirect('/')
```

### res.render

渲染html，支持模板渲染，基于[art-template](https://aui.github.io/art-template/zh-cn/docs/)

```javascript
// render html
res.render('./views/index.html');

// render html with data
const data = {
	user: {
		name: 'jack'
	}
};
res.render('./views/index.html', data);
```

## controller

约定大于配置，自动识别项目下以Controller.js结尾的文件

```javascript
// 例如server/controller/IndexController
/**
 * index controller
 */
module.exports = function (app) {
    // index
    app.get('/*', function (req, res) {
        res.render('./views/index.html');
    });
};
```

## version
### 0.0.2.20221009
1. headers

### 0.0.1.20221008
1. init project
2. listen
3. methods
4. /*
5. template
