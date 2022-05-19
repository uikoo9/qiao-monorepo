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
    type            : 'css',
    filename        : '[name].css',
    chunkFilename   : '[id].css',
    ignoreOrder     : true,
  },
  
  {
    type    : 'html',
    inject  : 'body',
    title   : 'index',
    chunks  : ['index'],
    filename: '../view/index.html',
    template: templatePath
  },
];