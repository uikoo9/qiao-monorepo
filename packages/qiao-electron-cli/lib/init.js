'use strict';

// path
var path = require('path');

// q
var q = require('qiao-file');

/**
 * init
 */
module.exports = function (destPath) {
  var src = path.resolve(__dirname, '../_demo');
  var dest = path.resolve(destPath, './electron');

  q.cp(src, dest);
};
