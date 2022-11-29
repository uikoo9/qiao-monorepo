## qiao-webpack

[![npm version](https://img.shields.io/npm/v/qiao-webpack.svg?style=flat-square)](https://www.npmjs.org/package/qiao-webpack)
[![npm downloads](https://img.shields.io/npm/dm/qiao-webpack.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-webpack)

开箱即用的 webpack 脚手架，详见：一篇文章学会[Webpack5.x](https://blog.insistime.com/webpack)

## 特性

- 内置了 img 的解析规则，且小于 4k 的文件使用 base64 编码内置
- 内置了 css 的解析规则， dev 环境下使用[style-loader](https://webpack.js.org/loaders/style-loader/#root)，非 dev 环境下使用[mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/#root)
- 内置了[sass](https://sass-lang.com/)的解析规则，使用[sass-loader](https://webpack.js.org/loaders/sass-loader/#root)解析
- 内置了[less](https://lesscss.org/)的解析规则，使用[less-loader](https://webpack.js.org/loaders/less-loader/#root)解析
- 内置了[postcss](https://postcss.org/)的解析规则，使用[postcss-loader](https://webpack.js.org/loaders/postcss-loader/#root)解析
- 内置了[react](https://reactjs.org/)的解析规则，使用[babel-loader](https://webpack.js.org/loaders/babel-loader/#root)解析
- 内置了[antd](https://ant.design/index-cn)的按需加载解析，使用[babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)实现
- 内置了[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/#root)，用来生成 html 文件，通过配置文件中的 plugins 使用
- 内置了[mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/#root)，用来提取 css 文件，通过配置文件中的 plugins 使用
- 使用[css-minimizer-webpack-plugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/#root)压缩 css 文件，使用[terser-webpack-plugin](https://webpack.js.org/plugins/terser-webpack-plugin/#root)压缩 js 文件
- 配置了以下包的 cacheGroups
  - react|react-dom|react-router|react-router-dom
  - [axios](https://axios-http.com/)
  - [antd](https://ant.design/index-cn)
  - [bulma](https://bulma.io/)
  - [bootstrap](https://getbootstrap.com/)
  - [quill](https://quilljs.com/)
  - [wangeditor](https://www.wangeditor.com/)
  - [prismjs](https://prismjs.com/)
