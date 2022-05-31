'use strict';

// path
var path = require('path');

// entry path
var indexPath = path.resolve(__dirname, '../src/views/index-view.jsx');
var mobilePath = path.resolve(__dirname, '../src/views/mobile-view.jsx');

// entry
module.exports = {
  index: indexPath,
  mobile: mobilePath,
};