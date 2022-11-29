"use strict";

var path = require("path");
var qiao = require("../../lib/_qiao.js");
qiao.coder = require("../../lib/qiao-server-coder.js");

/**
 * gen
 * 	tableName 	: table name, like t_blog_type
 * 	destFolder	: dest folder
 */
exports.gen = async function (tableName, destFolder) {
  var data = await qiao.coder.genData(tableName);
  console.log(data);

  // gen code
  genPage(destFolder, data);
  genEdit(destFolder, data);
  genSearch(destFolder, data);

  return;
};

// gen page
function genPage(destFolder, data) {
  var pageTemp = path.resolve(__dirname, "./pages/page.art");
  var pageDest = path.resolve(
    destFolder,
    `./src/${data.tableName1}-${data.tableName2}.jsx`
  );
  qiao.coder.genFileByData(pageTemp, data, pageDest);
}

// gen edit
function genEdit(destFolder, data) {
  var pageTemp = path.resolve(__dirname, "./pages/edit.art");
  var pageDest = path.resolve(
    destFolder,
    `./src/${data.tableName1}-${data.tableName2}-edit.jsx`
  );
  qiao.coder.genFileByData(pageTemp, data, pageDest);
}

// gen search
function genSearch(destFolder, data) {
  var pageTemp = path.resolve(__dirname, "./pages/search.art");
  var pageDest = path.resolve(
    destFolder,
    `./src/${data.tableName1}-${data.tableName2}-search.jsx`
  );
  qiao.coder.genFileByData(pageTemp, data, pageDest);
}
