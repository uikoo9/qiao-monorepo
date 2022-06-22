'use strict';

// path
var path = require('path');

// dist path
var distPath = path.resolve(__dirname, '../../../insistime-server/dist');

// output
module.exports = {
  filename: '[name].[contenthash:8].js',
  path: distPath,
  clean: true,
};