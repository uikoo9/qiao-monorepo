'use strict';

// path
var path = require('path');

// entry
module.exports = {
  'get': path.resolve(__dirname, '../__tests__/get.js'),
  'post': path.resolve(__dirname, '../__tests__/post.js'),
  'put': path.resolve(__dirname, '../__tests__/put.js'),
  'patch': path.resolve(__dirname, '../__tests__/patch.js'),
  'delete': path.resolve(__dirname, '../__tests__/delete.js'),
  'head': path.resolve(__dirname, '../__tests__/head.js'),
  'options': path.resolve(__dirname, '../__tests__/options.js')
};