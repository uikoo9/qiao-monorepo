'use strict';

var path = require('path');
var q = require('../index.js');

var test = function () {
  var sourceFile = path.resolve(__dirname, '../files_in/source-file.js');
  var destPath = path.resolve(__dirname, '../files_out/source-file.gz');

  q.gzipFile(
    sourceFile,
    destPath,
    function () {
      console.log('gzip file success');
      console.log(`   source file:    ${sourceFile}`);
      console.log(`   dest path:      ${destPath}`);
    },
    function (e) {
      console.log('gzip file fail');
      console.log(`   source file:    ${sourceFile}`);
      console.log(`   error:          ${e}`);
    },
  );
};

test();
