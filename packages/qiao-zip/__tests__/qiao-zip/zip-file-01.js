'use strict';

var q = require('../../index.js');

var test = async function () {
  try {
    var sourceFile = 'd:/qiao-zip/demo06/test.js';
    var destZip = 'd:/qiao-zip/demo06/test.zip';

    await q.zipFileSync(sourceFile, destZip);
  } catch (e) {
    console.log(e);
  }
};

test();
