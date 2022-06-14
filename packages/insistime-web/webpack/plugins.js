'use strict';

// path
var path = require('path');

// template path
var pcPath = path.resolve(__dirname, './template/pc.html');
var mobilePath = path.resolve(__dirname, './template/mobile.html');

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
    title: 'black-white-index-pc',
    chunks: ['black-white-index-pc'],
    filename: '../views/black-white/index-pc.html',
    publicPath:
      'https://static.insistime.com/00_insistime/static/',
    template: pcPath,
  },
  {
    type: 'html',
    inject: 'body',
    title: 'black-white-index-mobile',
    chunks: ['black-white-index-mobile'],
    filename: '../views/black-white/index-mobile.html',
    publicPath:
      'https://static.insistime.com/00_insistime/static/',
    template: mobilePath,
  },
  {
    type: 'html',
    inject: 'body',
    title: 'login',
    chunks: ['login'],
    filename: '../views/login.html',
    publicPath:
      'https://static.insistime.com/00_insistime/static/',
    template: pcPath,
  },
];
