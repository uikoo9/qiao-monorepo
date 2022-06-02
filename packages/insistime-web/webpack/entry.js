'use strict';

// path
var path = require('path');

// entry path
var indexPCPath     = path.resolve(__dirname, '../src/views/index-pc-view.jsx');
var indexMobilePath = path.resolve(__dirname, '../src/views/index-mobile-view.jsx');
var loginPCPath     = path.resolve(__dirname, '../src/views/login-pc-view.jsx');
var loginMobilePath = path.resolve(__dirname, '../src/views/login-mobile-view.jsx');

// entry
module.exports = {
  'index-pc'    : indexPCPath,
  'index-mobile': indexMobilePath,
  'login-pc'    : loginPCPath,
  'login-mobile': loginMobilePath,
};