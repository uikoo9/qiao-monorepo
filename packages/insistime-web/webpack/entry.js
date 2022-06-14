'use strict';

// path
var path = require('path');

// entry path
var blackWhiteIndexPc = path.resolve(__dirname, '../src/views/black-white/index-pc.jsx');
var blackWhiteIndexMobile = path.resolve(__dirname, '../src/views/black-white/index-mobile.jsx');
var loginPath = path.resolve(__dirname, '../src/views/login-view.jsx');

// entry
module.exports = {
  'black-white-index-pc': blackWhiteIndexPc,
  'black-white-index-mobile': blackWhiteIndexMobile,
  'login': loginPath,
};