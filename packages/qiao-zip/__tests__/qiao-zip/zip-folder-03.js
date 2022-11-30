'use strict';

var q = require('../../index.js');

var test = async function () {
  try {
    var sourceFolder = 'd:/test'; // 该路径下多文件夹，多文件等
    var destZip = 'd:/qiao-zip/demo97/test.zip'; // demo97不存在

    await q.zipFolderSync(sourceFolder, destZip, 'test');
  } catch (e) {
    console.log(e);
  }
};

test();
