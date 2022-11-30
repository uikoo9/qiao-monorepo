'use strict';

var q = require('../../index.js');

var test = async function () {
  try {
    var sourceFolder = '/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-zip/__tests__'; // 该路径下多文件夹，多文件等
    var destZip = '/Users/vincent/Data/projects/qiao/qiao-monorepo/test.zip';

    await q.zipFolderSync(sourceFolder, destZip);
  } catch (e) {
    console.log(e);
  }
};

test();
