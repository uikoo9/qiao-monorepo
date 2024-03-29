'use strict';

var path = require('path');
var q = require('../index.js');

var test = function () {
  var sourceFolder = path.resolve(__dirname, '../node_modules');
  var destPath = path.resolve(__dirname, '../files_out/node_modules.zip');

  q.compressFolder(
    'zip',
    sourceFolder,
    destPath,
    function () {
      console.log('compress folder success');
      console.log(`   source file:    ${sourceFolder}`);
      console.log(`   dest path:      ${destPath}`);
    },
    function (e) {
      console.log('compress folder fail');
      console.log(`   source folder:  ${sourceFolder}`);
      console.log(`   error:          ${e}`);
    },
  );
};

test();
