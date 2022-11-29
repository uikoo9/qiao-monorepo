"use strict";

var q = require("../index.js");

var test = async function () {
  try {
    var sourceFolder =
      "/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-electron-demo";
    var destZip =
      "/Users/vincent/Data/projects/qiao/qiao-monorepo/packages/qiao-electron-cli/lib/_.zip";

    console.log("zip folder " + sourceFolder);
    console.log("in " + destZip);
    console.log();

    console.log("please wait a moment...");
    console.log();

    var msg = await q.zipFolderSync(sourceFolder, destZip);
    console.log(msg);
  } catch (e) {
    console.log(e);
  }
};

test();
