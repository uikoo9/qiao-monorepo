'use strict';

// path
var path = require('path');

// entry path
var indexPCPath = path.resolve(__dirname, '../src/views/index-pc-view.jsx');
var indexMobilePath = path.resolve(__dirname, '../src/views/index-mobile-view.jsx');
var loginPath = path.resolve(__dirname, '../src/views/login-view.jsx');

// entry
module.exports = {
  'index-pc': indexPCPath,
  'index-mobile': indexMobilePath,
  'login': loginPath,
};