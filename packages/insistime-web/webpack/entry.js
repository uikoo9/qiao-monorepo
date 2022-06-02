'use strict';

// path
var path = require('path');

// entry path
var indexPath = path.resolve(__dirname, '../src/views/index-pc-view.jsx');
var mobilePath = path.resolve(__dirname, '../src/views/index-mobile-view.jsx');

// entry
module.exports = {
  index: indexPath,
  mobile: mobilePath,
};