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
	genController(destFolder, tableName1, className1, data);
	genService(destFolder, tableName1, className1, data);
	
	// gen webroot code
	genJs(destFolder, tableName1, tableName2, data);
	
	return;
};

// gen controller
function genController(destFolder, tableName1, className1, data){
	var controllerTemp 	= path.resolve(__dirname, './server/controller.art');
	var controllerDest	= path.resolve(destFolder, './server/manage-api/' + tableName1 + '/controller/' + className1 + 'Controller.js');
	qiao.coder.genFileByData(controllerTemp, data, controllerDest);
}

// gen service
function genService(destFolder, tableName1, className1, data){
	var serviceTemp = path.resolve(__dirname, './server/service.art');
	var serviceDest	= path.resolve(destFolder, './server/manage-api/' + tableName1 + '/service/' + className1 + 'Service.js');
	qiao.coder.genFileByData(serviceTemp, data, serviceDest);
}

// gen js
function genJs(destFolder, tableName1, tableName2, data){
	var jsTemp 	= path.resolve(__dirname, './webroot/js.art');
	var jsDest	= path.resolve(destFolder, './webroot-dev/static/js/app/manage/' + tableName1 + '/' + tableName1 + '-' + tableName2 + '.js');
	qiao.coder.genFileByData(jsTemp, data, jsDest);
}