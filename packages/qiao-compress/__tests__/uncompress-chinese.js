'use strict';

var path = require('path');
var q = require('../index.js');

var test = function () {
  var sourceFile = path.resolve(__dirname, '../files_in/uncompress-file-中文.zip');
  var destPath = path.resolve(__dirname, '../files_out/');

  q.uncompress(
    'zip',
    sourceFile,
    destPath,
    function () {
      console.log('uncompress file success');
      console.log(`   source file:    ${sourceFile}`);
      console.log(`   dest path:      ${destPath}`);
    },
    function (e) {
      console.log('uncompress file fail');
      console.log(`   source file:    ${sourceFile}`);
      console.log(`   error:          ${e}`);
    },
  );
};

test();
