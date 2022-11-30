'use strict';

var path = require('path');
var qiao = require('../../lib/_qiao.js');
qiao.coder = require('../../lib/qiao-server-coder.js');

/**
 * gen
 * 	tableName 	: table name, like t_blog_type
 * 	destFolder	: dest folder
 */
exports.gen = async function (tableName, destFolder) {
  var data = await qiao.coder.genData(tableName);
  console.log(data);

  // gen code
  genController(destFolder, data);
  genService(destFolder, data);
  genModel(destFolder, data);
  genSql(destFolder, data);

  return;
};

// gen controller
function genController(destFolder, data) {
  var pageTemp = path.resolve(__dirname, './server/controller.art');
  var pageDest = path.resolve(destFolder, `./lib/${data.tableName1}/controller/${data.className1}Controller.js`);
  qiao.coder.genFileByData(pageTemp, data, pageDest);
}

// gen service
function genService(destFolder, data) {
  var pageTemp = path.resolve(__dirname, './server/service.art');
  var pageDest = path.resolve(destFolder, `./lib/${data.tableName1}/service/${data.className1}Service.js`);
  qiao.coder.genFileByData(pageTemp, data, pageDest);
}

// gen model
function genModel(destFolder, data) {
  var modelTemp = path.resolve(__dirname, './server/model.art');
  var modelDest = path.resolve(destFolder, `./lib/${data.tableName1}/model/${data.className1}Model.js`);
  qiao.coder.genFileByData(modelTemp, data, modelDest);
}

// gen sql
function genSql(destFolder, data) {
  var sqlTemp = path.resolve(__dirname, './server/sql.art');
  var sqlDest = path.resolve(
    destFolder,
    `./lib/${data.tableName1}/model/${data.tableName1}-${data.tableName2}-sql.json`,
  );
  qiao.coder.genFileByData(sqlTemp, data, sqlDest);
}
