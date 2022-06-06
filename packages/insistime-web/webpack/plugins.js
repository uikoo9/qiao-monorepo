'use strict';

// path
var path = require('path');

// template path
var indexPCPath = path.resolve(__dirname, './template/index-pc.html');
var indexMobilePath = path.resolve(__dirname, './template/index-mobile.html');
var loginPCPath = path.resolve(__dirname, './template/login-pc.html');
var loginMobilePath = path.resolve(__dirname, './template/login-mobile.html');

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
    title: 'login-pc',
    chunks: ['login-pc'],
    filename: '../views/login-pc.html',
    publicPath:
      'https://static.insistime.com/00_insistime/static/',
    // filename: 'login-pc.html',
    template: loginPCPath,
  },
  {
    type: 'html',
    inject: 'body',
    title: 'login-mobile',
    chunks: ['login-mobile'],
    filename: '../views/login-mobile.html',
    publicPath:
      'https://static.insistime.com/00_insistime/static/',
    // filename: 'login-mobile.html',
    template: loginMobilePath,
  },
];
