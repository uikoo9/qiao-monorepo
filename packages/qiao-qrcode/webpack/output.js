'use strict';

// path
var path = require('path');

// dist path
var distPath = path.resolve(__dirname, '../dist');

// output
module.exports = {
  filename: '[name].bundle.js',
  path: distPath,
  clean: true,
};
