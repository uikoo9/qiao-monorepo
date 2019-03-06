'use strict';

var path	= require('path');
var qiao	= require('qiao.util.all');
qiao.coder	= require('../../lib/qiao.plugin.coder.js');

/**
 * gen
 * 	destFolder	: dest folder
 * 	tableName 	: table name, like t_blog_type
 */
exports.gen = async function(destFolder, tableName){
	var data = await qiao.coder.genData(tableName);
	
	// gen server code
	genController(destFolder, data);
	genService(destFolder, data);
	genModel(destFolder, data);
	genSql(destFolder, data);
	
	// gen webroot code
//	genHtml(destFolder, data);
//	genJs(destFolder, data);
	
	return;
};

// gen controller
function genController(destFolder, data){
	var controllerTemp 	= path.resolve(__dirname, './server/controller.art');
	var controllerDest	= path.resolve(destFolder, './server/manage-db/' + data.tableName1 + '/controller/' + data.className1 + 'Controller.js');
	qiao.coder.genFileByData(controllerTemp, data, controllerDest);
}

// gen service
function genService(destFolder, data){
	var serviceTemp = path.resolve(__dirname, './server/service.art');
	var serviceDest	= path.resolve(destFolder, './server/manage-db/' + data.tableName1 + '/service/' + data.className1 + 'Service.js');
	qiao.coder.genFileByData(serviceTemp, data, serviceDest);
}

// gen model
function genModel(destFolder, data){
	var modelTemp 	= path.resolve(__dirname, './server/model.art');
	var modelDest	= path.resolve(destFolder, './server/manage-db/' + data.tableName1 + '/model/' + data.className1 + 'Model.js');
	qiao.coder.genFileByData(modelTemp, data, modelDest);
}

// gen sql
function genSql(destFolder, data){
	var sqlTemp = path.resolve(__dirname, './server/sql.art');
	var sqlDest	= path.resolve(destFolder, './server/manage-db/' + data.tableName1 + '/model/' + data.tableName1 + '-' + data.tableName2 + '-sql.json');
	qiao.coder.genFileByData(sqlTemp, data, sqlDest);
}

// gen html
function genHtml(destFolder, data){
	var htmlTemp = path.resolve(__dirname, './webroot/edit.art');
	var htmlDest	= path.resolve(destFolder, './webroot-dev/views/manage/' + data.tableName1 + '/' + data.tableName1 + '-' + data.tableName2 + '-edit.html');
	qiao.coder.genFileByData(htmlTemp, data, htmlDest);
}

// gen js
function genJs(destFolder, data){
	var jsTemp 	= path.resolve(__dirname, './webroot/js.art');
	var jsDest	= path.resolve(destFolder, './webroot-dev/static/js/app/manage/' + data.tableName1 + '/' + data.tableName1 + '-' + data.tableName2 + '.js');
	qiao.coder.genFileByData(jsTemp, data, jsDest);
}