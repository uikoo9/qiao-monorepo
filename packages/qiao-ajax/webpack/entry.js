'use strict';

// path
var path = require('path');

// entry
module.exports = {
  'get'       : path.resolve(__dirname, '../test/get.js'),
  'post'      : path.resolve(__dirname, '../test/post.js'),
  'put'       : path.resolve(__dirname, '../test/put.js'),
  'patch'     : path.resolve(__dirname, '../test/patch.js'),
  'delete'    : path.resolve(__dirname, '../test/delete.js'),
  'head'      : path.resolve(__dirname, '../test/head.js'),
  'options'   : path.resolve(__dirname, '../test/options.js')
};