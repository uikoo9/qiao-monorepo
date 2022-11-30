'use strict';

// path
var path = require('path');

/**
 * qiao.webpack.js
 */
module.exports = [
  {
    type: 'html',
    inject: 'body',
    title: 'get',
    chunks: ['get'],
    filename: 'get.html',
    template: path.resolve(__dirname, '../__tests__/get.html'),
  },
];
