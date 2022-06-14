'use strict';

// path
var path = require('path');

// entry path
var blackWhiteIndexPc = path.resolve(__dirname, '../src/views/black-white/index-pc.jsx');
var blackWhiteIndexMobile = path.resolve(__dirname, '../src/views/black-white/index-mobile.jsx');
var blackWhiteLoginPath = path.resolve(__dirname, '../src/views/black-white/login.jsx');
var indexPath = path.resolve(__dirname, '../src/views/index/index.jsx');

// entry
module.exports = {
  'black-white-index-pc': blackWhiteIndexPc,
  'black-white-index-mobile': blackWhiteIndexMobile,
  'black-white-login': blackWhiteLoginPath,
  'index': indexPath,
};