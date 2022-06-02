'use strict';

// path
var path = require('path');

// output
module.exports = {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, '../dist'),
  clean: true,
};