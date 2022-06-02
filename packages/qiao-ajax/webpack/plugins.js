'use strict';

// path
var path = require('path');

/**
 * qiao.webpack.js
 */
module.exports = [
  {
    type: 'html',
    inject: 'body',
    title: 'delete',
    chunks: ['delete'],
    filename: 'delete.html',
    template: path.resolve(__dirname, '../__tests__/delete.html')

  },
  {
    type: 'html',
    inject: 'body',
    title: 'get',
    chunks: ['get'],
    filename: 'get.html',
    template: path.resolve(__dirname, '../__tests__/get.html')
  },
  {
    type: 'html',
    inject: 'body',
    title: 'head',
    chunks: ['head'],
    filename: 'head.html',
    template: path.resolve(__dirname, '../__tests__/head.html')
  },
  {
    type: 'html',
    inject: 'body',
    title: 'options',
    chunks: ['options'],
    filename: 'options.html',
    template: path.resolve(__dirname, '../__tests__/options.html')
  },
  {
    type: 'html',
    inject: 'body',
    title: 'patch',
    chunks: ['patch'],
    filename: 'patch.html',
    template: path.resolve(__dirname, '../__tests__/patch.html')
  },
  {
    type: 'html',
    inject: 'body',
    title: 'post',
    chunks: ['post'],
    filename: 'post.html',
    template: path.resolve(__dirname, '../__tests__/post.html')
  },
  {
    type: 'html',
    inject: 'body',
    title: 'put',
    chunks: ['put'],
    filename: 'put.html',
    template: path.resolve(__dirname, '../__tests__/put.html')
  },
];