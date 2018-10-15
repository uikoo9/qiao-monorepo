'use strict';

var fs				= require('fs');
var path			= require('path');
var template		= require('art-template');
var qiaoUtilString 	= require('./qiao.util.string.js');

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
exports.genFileByData = function(templateFile, templateData, destFile){
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
		var data = template(templateFile, templateData);
		
		fs.writeFileSync(destFile, data);
	}catch(e){
		console.log(e);
	}
};

/**
 * gen server code
 * 	destFolder	: dest folder
 * 	tableName 	: table name, like t_blog_type
 * 	params		: params
 */
exports.genServerCode = function(destFolder, tableName, params){
	var className	= qiaoUtilString.underScoreCaseToCamelCase(tableName);
	var className1 	= className.substr(1, className.length);
	var className2 	= qiaoUtilString.firstLetterLower(className1);
	var tableName1 	= tableName.split('_')[1];
	var tableName2 	= tableName.split('_')[2];
	
	var data = {
		className1 	: className1,
		className2 	: className2,
		tableName1 	: tableName1,
		tableName2 	: tableName2,
		params		: params
	};
	console.log(data);
	
	// gen controller
	var controllerTemp 	= path.resolve(__dirname, '../temp/controller.art');
	var controllerDest	= path.resolve(destFolder, './server/manage/' + tableName1 + '/controller/' + className1 + 'Controller.js');
	exports.genFileByData(controllerTemp, data, controllerDest);
	
	// gen model
	var modelTemp 	= path.resolve(__dirname, '../temp/model.art');
	var modelDest	= path.resolve(destFolder, './server/manage/' + tableName1 + '/model/' + className1 + 'Model.js');
	exports.genFileByData(modelTemp, data, modelDest);

	// gen service
	var serviceTemp = path.resolve(__dirname, '../temp/service.art');
	var serviceDest	= path.resolve(destFolder, './server/manage/' + tableName1 + '/service/' + className1 + 'Service.js');
	exports.genFileByData(serviceTemp, data, serviceDest);
};