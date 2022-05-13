'use strict';

var path	= require('path');
var qiao	= require('qiao.util.all');
qiao.coder	= require('../../lib/qiao-coder.js');

/**
 * gen
 * 	tableName 	: table name, like t_blog_type
 * 	destFolder	: dest folder
 */
exports.gen = async function(tableName, destFolder){
	var data = await qiao.coder.genData(tableName);
	
	// gen server code
	genController(destFolder, data);
	genService(destFolder, data);
	
	// gen webroot code
	genJs(destFolder, data);
	
	return;
};

// gen controller
function genController(destFolder, data){
	var controllerTemp 	= path.resolve(__dirname, './server/controller.art');
	var controllerDest	= path.resolve(destFolder, './server/manage-api/' + data.tableName1 + '/controller/' + data.className1 + 'Controller.js');
	qiao.coder.genFileByData(controllerTemp, data, controllerDest);
}

// gen service
function genService(destFolder, data){
	var serviceTemp = path.resolve(__dirname, './server/service.art');
	var serviceDest	= path.resolve(destFolder, './server/manage-api/' + data.tableName1 + '/service/' + data.className1 + 'Service.js');
	qiao.coder.genFileByData(serviceTemp, data, serviceDest);
}

// gen js
function genJs(destFolder, data){
	var jsTemp 	= path.resolve(__dirname, './webroot/js.art');
	var jsDest	= path.resolve(destFolder, './webroot-dev/static/js/app/manage/' + data.tableName1 + '/' + data.tableName1 + '-' + data.tableName2 + '.js');
	qiao.coder.genFileByData(jsTemp, data, jsDest);
}