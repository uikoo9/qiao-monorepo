'use strict';

var q = require('../../index.js');

var test = function () {
  var zipFile = 'd:/qiao-zip/demo05/test.zip'; // 这个zip中多文件夹嵌套，多文件，中文名文件
  var destFolder = 'd:/qiao-zip/demo05';

  q.unzip(zipFile, destFolder);
};

test();
