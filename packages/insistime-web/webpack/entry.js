'use strict';

// path
var path = require('path');

// entry path
var indexPc = path.resolve(__dirname, '../src/views/index/index-pc.jsx');
var indexMobile = path.resolve(__dirname, '../src/views/index/index-mobile.jsx');
var loginPath = path.resolve(__dirname, '../src/views/index/login.jsx');
var managePath = path.resolve(__dirname, '../src/views/manage.jsx');

// entry
module.exports = {
  'index-pc': indexPc,
  'index-mobile': indexMobile,
  'login': loginPath,
//   'manage': managePath,
};