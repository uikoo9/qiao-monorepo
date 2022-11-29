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
  genService(destFolder, data);

  return;
};

// gen service
function genService(destFolder, data) {
  var pageTemp = path.resolve(__dirname, "./service/service.art");
  var pageDest = path.resolve(
    destFolder,
    `./src/service/${data.tableName1}-${data.tableName2}-service.js`
  );
  qiao.coder.genFileByData(pageTemp, data, pageDest);
}
