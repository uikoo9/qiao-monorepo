'use strict';

var fs				= require('fs');
var path			= require('path');
var template		= require('art-template');
var qiaoUtilFile	= require('qiao.util.file');
var qiaoUtilString 	= require('qiao.util.string');
var qiaoPluginMysql = require('qiao.plugin.mysql');

/**
 * genFileByFile
 * 	templateFile : template file path
 * 	templateData : template data json file path
 * 	destFile : dest file path
 */
exports.genFileByFile = function(templateFile, templateDataFile, destFile){
	// check temp file
	if(!templateFile){
		console.log('need template file path!');
		return;
	}
	
	// check temp data file
	if(!templateDataFile){
		console.log('need template data file path!');
		return;
	}
	
	// check dest file
	if(!destFile){
		console.log('need dest file path!');
		return;
	}
	
	// gen file
	try{
		var file = fs.readFileSync(templateDataFile, {encoding : 'utf8'});
		var data = JSON.parse(file);
		
		exports.genFileByData(templateFile, data, destFile);
	}catch(e){
		console.log(e);
	}
};

/**
 * genFileByData
 * 	templateFile : template file path
 * 	templateData : template data
 * 	destFile : dest file path
 */
exports.genFileByData = async function(templateFile, templateData, destFile){
	// check temp file
	if(!templateFile){
		console.log('need template file path!');
		return;
	}
	
	// check temp data
	if(!templateData){
		console.log('need template data!');
		return;
	}

	// check dest file
	if(!destFile){
		console.log('need dest file path!');
		return;
	}
	
	// gen file
	try{
		// data
		var data = template(templateFile, templateData);
		
		// mkdir
		qiaoUtilFile.mkdir(destFile);
		
		// write file
		fs.writeFileSync(destFile, data);
	}catch(e){
		console.log(e);
	}
};

/**
 * gen server code
 * 	destFolder	: dest folder
 * 	tableName 	: table name, like t_blog_type
 */
exports.genServerCode = async function(destFolder, tableName){
	// init mysql
	qiaoPluginMysql.init(require('./_config.json'));
	
	// vars
	var className	= qiaoUtilString.underScoreCaseToCamelCase(tableName);
	var className1 	= className.substr(1, className.length);
	var className2 	= qiaoUtilString.firstLetterLower(className1);
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
	var columns = await qiaoPluginMysql.getColumns(tableName);
	for(var i=0; i<columns.length; i++){
		var item = columns[i];
		
		// name1
		var name1 = item.Field;
		if(!notIn(name1)) continue;
		
		// name2
		var name3 = qiaoUtilString.underScoreCaseToCamelCase(name1);
		var name2 = qiaoUtilString.firstLetterLower(name3);
		
		// obj
		var obj 	= {};
		obj.type	= qiaoPluginMysql.getTypes(item.Type);
		obj.name1 	= name1;
		obj.name2 	= name2;
		
		// params
		params.push(obj);
	}
	data.params = params;
	
	// gen code
	genController(destFolder, tableName1, className1, data);
	genModel(destFolder, tableName1, className1, data);
	genService(destFolder, tableName1, className1, data);
	genSql(destFolder, tableName1, className1, data);
	
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
	var controllerTemp 	= path.resolve(__dirname, '../template/server/controller.art');
	var controllerDest	= path.resolve(destFolder, './server/manage/' + tableName1 + '/controller/' + className1 + 'Controller.js');
	exports.genFileByData(controllerTemp, data, controllerDest);
}

// gen model
function genModel(destFolder, tableName1, className1, data){
	var modelTemp 	= path.resolve(__dirname, '../template/server/model.art');
	var modelDest	= path.resolve(destFolder, './server/manage/' + tableName1 + '/model/' + className1 + 'Model.js');
	exports.genFileByData(modelTemp, data, modelDest);
}

// gen service
function genService(destFolder, tableName1, className1, data){
	var serviceTemp = path.resolve(__dirname, '../template/server/service.art');
	var serviceDest	= path.resolve(destFolder, './server/manage/' + tableName1 + '/service/' + className1 + 'Service.js');
	exports.genFileByData(serviceTemp, data, serviceDest);
}

// gen sql
function genSql(destFolder, tableName1, className1, data){
	var sqlTemp = path.resolve(__dirname, '../template/server/sql.art');
	var sqlDest	= path.resolve(destFolder, './server/manage/manage-sql.json');
	exports.genFileByData(sqlTemp, data, sqlDest);
}