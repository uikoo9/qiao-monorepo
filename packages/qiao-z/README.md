# qiao-z
[![npm version](https://img.shields.io/npm/v/qiao-z.svg?style=flat-square)](https://www.npmjs.org/package/qiao-z)
[![npm downloads](https://img.shields.io/npm/dm/qiao-z.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-z)

nodejs下极简的web框架, [docs](https://code.insistime.com/qiao-z)

## 安装
```bash
npm i qiao-z
```

## 使用
```javascript
/**
 * |-- app.js
 */

// app
const app = require('qiao-z')();

// listen
app.listen(5277);
```

## examples
```bash
git clone ...
cd __tests__
node app.js

# open http://localhost:5277
```

## version
### 0.0.3.20221028
1. app.get
2. app.post
3. app.static
4. app.listen
5. req.url
6. req.quer
7. req.params
8. req.body
9. req.headers
10. req.useragent
11. req.cookies
12. res.redirect
13. res.send
14. res.json
15. res.jsonSuccess
16. res.jsonFail
17. res.clearCookie
18. res.render

### 0.0.2.20221009
1. headers
2. docs
3. static

### 0.0.1.20221008
1. init project
2. listen
3. methods
4. /*
5. template
