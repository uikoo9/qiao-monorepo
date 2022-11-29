"use strict";

var q = require("../index.js");

var test = function () {
  var zipFile = "/Users/vincent/Data/projects/qiao/qiao-monorepo/test.zip";
  var destFolder =
    "/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/2/";

  console.log("unzip " + zipFile);
  console.log("to " + destFolder);
  console.log();

  console.log("please wait a moment...");
  console.log();

  q.unzip(zipFile, destFolder);
  console.log("unzip success!");
};

test();
