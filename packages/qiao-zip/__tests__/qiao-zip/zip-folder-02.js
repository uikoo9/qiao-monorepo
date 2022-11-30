'use strict';

var q = require('../../index.js');

var test = async function () {
  try {
    var sourceFolder = 'd:/test'; // 该路径下多文件夹，多文件等
    var destZip = 'd:/qiao-zip/demo09/test.zip';

    await q.zipFolderSync(sourceFolder, destZip, 'test');
  } catch (e) {
    console.log(e);
  }
};

test();
