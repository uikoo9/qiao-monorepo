# qiao-webpack

[![npm version](https://img.shields.io/npm/v/qiao-webpack.svg?style=flat-square)](https://www.npmjs.org/package/qiao-webpack)
[![npm downloads](https://img.shields.io/npm/dm/qiao-webpack.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-webpack)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/qiao-webpack)
[![Known Vulnerabilities](https://snyk.io/test/npm/qiao-webpack/badge.svg)](https://snyk.io/test/npm/qiao-webpack)

[webpack](https://webpack.js.org)脚手架

## config
```javascript
module.exports = {
  // https://webpack.js.org/configuration/dev-server/
  devServer: {},

  // https://webpack.js.org/configuration/entry-context/#entry
  entry: {},

  // https://webpack.js.org/configuration/output/
  output: {},

  // https://webpack.js.org/configuration/resolve/
  resolve: {},

  // https://webpack.js.org/configuration/performance/
  performance: {},

  // plugins
  plugins: {},

  // cache groups
  cacheGroups: {},

  // css includes
  cssIncludes: {},

  // postcss config
  postcssConfig: {}
};
```

### plugins
```javascript
  {
    type: 'css',
    filename: '[name].[contenthash:8].css',
    chunkFilename: '[id].[contenthash:8].css',
    ignoreOrder: true,
  },
  {
    type: 'html',
    inject: 'body',
    title: 'index-pc',
    chunks: ['index-pc'],
    filename: '../views/index-pc.html',
    template: indexPCPath,
  },
```

### cssIncludes
```javascript
[
  /node_modules[\\/]antd/,
  /node_modules[\\/]iconfont\.css$/,
  /node_modules[\\/]normalize\.css/,
]
```

### postcssConfig
```javascript
  plugins: [
    require('autoprefixer')
  ]
```

## cli
### build
```shell
qwebpack build /{yourconfigpath}/qiao.webpack.js
```

### dev
```shell
qwebpack dev /{yourconfigpath}/qiao.webpack.js
```

### analyzer
```shell
qwebpack analyzer /{yourconfigpath}/qiao.webpack.js
```

## version
### 0.1.0.20220926
1. ncu
   
### 0.0.9.20220612
1. postcss

### 0.0.8.20220508
1. optimization

### 0.0.8.20220507
1. optimization
2. css build dev
3. mini css
4. antd
5. babel-plugin-import

### 0.0.7.20220505
1. webpack plugins

### 0.0.6.20220415
1. add lerna
2. rule for react del exclude

### 0.0.5.20220414
1. webpack error show
2. webpack anaylzer

### 0.0.4.20220322
1. add webpack dev server
2. add webpack target
3. add sass
4. add resolve
5. css

### 0.0.3.20220316
1. add target

### 0.0.2.20220315
1. build log
2. dev ok
3. del help

### 0.0.1.20220314
1. init project
2. build ok
