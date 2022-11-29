"use strict";

var path = require("path");
var q = require("../index.js");

var test = function () {
  var sourceFile = path.resolve(__dirname, "../files_in/untar-file.tar");
  var destPath = path.resolve(__dirname, "../files_out");

  q.untar(
    sourceFile,
    destPath,
    function () {
      console.log("untar file success");
      console.log(`   source file:    ${sourceFile}`);
      console.log(`   dest path:      ${destPath}`);
    },
    function (e) {
      console.log("untar file fail");
      console.log(`   source file:    ${sourceFile}`);
      console.log(`   error:          ${e}`);
    }
  );
};

test();
