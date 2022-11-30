'use strict';

var q = require('../../index.js');

var test = function () {
  var zipFile = 'd:/qiao-zip/demo03/test.zip';
  var destFolder = 'd:/qiao-zip/demo99'; //这个path不存在

  q.unzip(zipFile, destFolder);
};

test();
