'use strict';

// alias
var alias = require('./prod/alias.js');

// entry
var entry = require('./prod/entry.js');

// output
var output = require('./prod/output.js');

// plugins
var plugins = require('./prod/plugins.js');

/**
 * qiao.webpack.js
 */
module.exports = {
  entry: entry,
  output: output,
  plugins: plugins,
  resolve: {
    alias: alias,
  },
  performance: {
    hints: false,
  },
};