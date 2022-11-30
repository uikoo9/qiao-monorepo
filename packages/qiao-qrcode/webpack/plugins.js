'use strict';

// path
var path = require('path');

// template path
var templatePath = path.resolve(__dirname, '../__tests__/qrcode.html');

/**
 * qiao.webpack.js
 */
module.exports = [
  {
    type: 'html',
    inject: 'body',
    title: 'qrcode',
    chunks: ['qrcode'],
    filename: 'qrcode.html',
    template: templatePath,
  },
];
