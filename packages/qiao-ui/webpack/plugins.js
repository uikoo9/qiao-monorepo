'use strict';

// path
var path = require('path');

// template path
var indexPath = path.resolve(__dirname, './template/index.html');

/**
 * qiao.webpack.js
 */
module.exports = [
  {
    type: 'css',
    filename: '[name].[contenthash:8].css',
    chunkFilename: '[id].[contenthash:8].css',
    ignoreOrder: true,
  },

  {
    type: 'html',
    inject: 'body',
    title: 'index',
    chunks: ['index'],
    filename: 'index.html',
    template: indexPath,
  },
];
