'use strict';

// path
var path = require('path');

// template path
var indexPCPath = path.resolve(__dirname, './template/index-pc.html');
var indexMobilePath = path.resolve(__dirname, './template/index-mobile.html');
var loginPath = path.resolve(__dirname, './template/login.html');

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
    title: 'index-pc',
    chunks: ['index-pc'],
    filename: '../views/index-pc.html',
    publicPath:
      'https://static.insistime.com/00_insistime/static/',
    // filename: 'index-pc.html',
    template: indexPCPath,
  },
  {
    type: 'html',
    inject: 'body',
    title: 'index-mobile',
    chunks: ['index-mobile'],
    filename: '../views/index-mobile.html',
    publicPath:
      'https://static.insistime.com/00_insistime/static/',
    template: indexMobilePath,
  },
  {
    type: 'html',
    inject: 'body',
    title: 'login',
    chunks: ['login'],
    filename: '../views/login.html',
    publicPath:
      'https://static.insistime.com/00_insistime/static/',
    // filename: 'login.html',
    template: loginPath,
  },
];
