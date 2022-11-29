"use strict";

var q = require("../index.js");
var client = q.client(require("./config.json"));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = async function () {
  try {
    var destPath = "test/test.js";
    var sourceFile = "d:/test.js";

    var rs = await q.uploadFileSync(client, destPath, sourceFile);
    console.log(rs);
  } catch (e) {
    console.log(e);
  }
};

test();
