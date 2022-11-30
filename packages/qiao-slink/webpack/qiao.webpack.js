'use strict';

// path
var path = require('path');

// template path
var templatePath = path.resolve(__dirname, './template.html');

/**
 * qiao.webpack.js
 */
module.exports = {
  entry: {
    'short-link': './__tests__/short-link.js',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'window',
    library: 'init',
  },
  plugins: [
    {
      type: 'html',
      inject: 'body',
      title: 'short-link',
      chunks: ['short-link'],
      filename: 'short-link.html',
      template: templatePath,
    },
  ],
};
