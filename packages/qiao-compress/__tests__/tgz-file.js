'use strict';

var path = require('path');
var q = require('../index.js');

var test = function () {
  var sourceFile = path.resolve(__dirname, '../files_in/source-file.js');
  var destPath = path.resolve(__dirname, '../files_out/source-file.tgz');

  q.tgzFile(
    sourceFile,
    destPath,
    function () {
      console.log('tgz file success');
      console.log(`   source file:    ${sourceFile}`);
      console.log(`   dest path:      ${destPath}`);
    },
    function (e) {
      console.log('tgz file fail');
      console.log(`   source file:    ${sourceFile}`);
      console.log(`   error:          ${e}`);
    },
  );
};

test();
