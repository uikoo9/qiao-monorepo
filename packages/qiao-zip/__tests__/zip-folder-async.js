"use strict";

var q = require("../index.js");

var test = function () {
  var sourceFolder =
    "/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-zip";
  var destZip = "./2.zip";

  console.log("zip folder " + sourceFolder);
  console.log("in " + destZip);
  console.log();

  console.log("please wait a moment...");
  console.log();

  q.zipFolder(sourceFolder, destZip, function (err, msg) {
    if (err) throw err;
    console.log(msg);
  });
};

test();
