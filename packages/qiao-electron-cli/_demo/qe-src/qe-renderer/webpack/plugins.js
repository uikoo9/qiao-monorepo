'use strict';

// path
var path = require('path');

// template path
var templatePath = path.resolve(__dirname, './template.html');

/**
 * qiao.webpack.js
 */
module.exports = [
  {
    type    : 'html',
    inject  : 'body',
    title   : 'index',
    chunks  : ['index'],
    filename: 'index.html',
    template: templatePath
  },
];