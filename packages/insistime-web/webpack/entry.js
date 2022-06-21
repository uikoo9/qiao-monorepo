'use strict';

// path
var path = require('path');

// entry path
var indexPc = path.resolve(__dirname, '../src/views/index/index-pc-view.jsx');
var indexMobile = path.resolve(__dirname, '../src/views/index/index-mobile-view.jsx');
var login = path.resolve(__dirname, '../src/views/login/login-view.jsx');
var managePath = path.resolve(__dirname, '../src/views/manage.jsx');

// entry
module.exports = {
  'index-pc': indexPc,
  'index-mobile': indexMobile,
  'login': login,
//   'manage': managePath,
};