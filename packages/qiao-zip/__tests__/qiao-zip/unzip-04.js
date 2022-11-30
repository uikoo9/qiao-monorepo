'use strict';

var q = require('../../index.js');

var test = function () {
  var zipFile = 'd:/qiao-zip/demo04/test.zip'; // 这个zip中的文件为test-你好.js
  var destFolder = 'd:/qiao-zip/demo04';

  q.unzip(zipFile, destFolder);
};

test();
