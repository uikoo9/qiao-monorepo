"use strict";

var q = require("../index.js");
var client = q.client(require("./config.json"));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = function () {
  var destPath = "test/test.js";
  var sourceFile = "d:/test.js";

  q.uploadFile(client, destPath, sourceFile, function (err, rs) {
    if (err) throw err;

    console.log(rs);
  });
};

test();
