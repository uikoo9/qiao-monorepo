'use strict';

// dev
var dev = require('./dev/dev.js');

// plugins
var plugins = require('./dev/dev-plugins.js');

// entry
var entry = require('./prod/entry.js');

// alias
var alias = require('./prod/alias.js');

/**
 * qiao.webpack.js
 */
module.exports = {
  devServer: dev,
  plugins: plugins,
  entry: entry,
  resolve: {
    alias: alias,
  },
  performance: {
    hints: false,
  },
};