'use strict';

var q = require('../../index.js');

var test = async function () {
  try {
    var sourceFile = 'd:/qiao-zip/demo07/test-你好.js';
    var destZip = 'd:/qiao-zip/demo98/test.zip'; // demo98这个路径不存在

    await q.zipFileSync(sourceFile, destZip);
  } catch (e) {
    console.log(e);
  }
};

test();
