'use strict';

var path	= require('path');
var qiao	= require('qiao.util.all');
qiao.coder	= require('../../lib/qiao.plugin.coder.js');
qiao.config	= require('./config.json');

/**
 * gen
 * 	destFolder	: dest folder
 * 	tableName 	: table name, like t_blog_type
 */
exports.gen = async function(destFolder, tableName){
	// vars
	var className	= qiao.string.underScoreCaseToCamelCase(tableName);
	var className1 	= className.substr(1, className.length);
	var className2 	= qiao.string.firstLetterLower(className1);
	var tableName1 	= tableName.split('_')[1];
	var tableName2 	= tableName.split('_')[2];
	
	// data
	var data = {
		className1 	: className1,
		className2 	: className2,
		tableName	: tableName,
		tableName1 	: tableName1,
		tableName2 	: tableName2
	};
	
	// params
	var params	= [];
	var columns = await qiao.mysql.getColumns(qiao.config, tableName);
	for(var i=0; i<columns.length; i++){
		var item = columns[i];
		
		// name1
		var name1 = item.Field;
		if(!notIn(name1)) continue;
		
		// name2
		var name3 = qiao.string.underScoreCaseToCamelCase(name1);
		var name2 = qiao.string.firstLetterLower(name3);
		
		// obj
		var obj 	= {};
		obj.type	= qiao.mysql.getTypes(item.Type);
		obj.name1 	= name1;
		obj.name2 	= name2;
		
		// params
		params.push(obj);
	}
	data.params = params;
	
	// gen server code
	genController(destFolder, tableName1, className1, data);
	genService(destFolder, tableName1, className1, data);
	
	// gen webroot code
	genJs(destFolder, tableName1, tableName2, data);
	
	return;
};

// not in
function notIn(s){
	var ss = ['id', 'cdate', 'cuser_id', 'cuser_name', 'udate', 'uuser_id', 'uuser_name', 'del_tag'];
	for(var i=0; i<ss.length; i++){
		if(s == ss[i]) return false;
	}
	
	return true;
}

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