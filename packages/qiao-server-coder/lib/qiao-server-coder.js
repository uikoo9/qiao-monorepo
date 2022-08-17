'use strict';

var fs			= require('fs');
var template	= require('art-template');
var qiao 		= require('./_qiao.js');

/**
 * config
 */
exports.config = require('./config.json');

/**
 * gen data
 * 	tableName
 */
exports.genData = async function(tableName){
	// class name
	var className	= qiao.string.underScoreCaseToCamelCase(tableName);
	var className1 	= className.substr(1, className.length);
	var className2 	= qiao.string.firstLetterLower(className1);

	// data
	var data = {
		className1 	: className1,
		className2 	: className2,
		tableName	: tableName
	};
	data = getTableName(tableName, data);
	
	// columns
	var columns = null;
	try{
		columns = await qiao.mysql.getColumns(exports.config.db, tableName);
	}catch(e){
		console.log('table ' + tableName + ' doesn\'t exist!');
		return;
	}
	
	// params
	var params	= [];
	var defaultColumns = exports.config.defaultColumns; 
	for(var i=0; i<columns.length; i++){
		var item = columns[i];
		
		// name1
		var name1 = item.Field;
		if(defaultColumns.indexOf(name1) > -1) continue;
		
		// name2
		var name3 = qiao.string.underScoreCaseToCamelCase(name1);
		var name2 = qiao.string.firstLetterLower(name3);
		
		// obj
		var obj 	= {};
		obj.type	= qiao.mysql.getTypes(item.Type);
		obj.name1 	= name1;
		obj.name2 	= name2;
        obj.name3 	= name3;
		
		// params
		params.push(obj);
	}
	data.params = params;
	
	// return
	return data;
};

// get table name
function getTableName(tableName, data){
	var tableNames 	= tableName.split('_');
	
	var tableName1 	= null;
	var tableName2	= null;
	var tableTemp	= [];
	for(var i=0; i<tableNames.length; i++){
		if(i == 1) tableName1 = tableNames[i];
		
		if(i > 1) tableTemp.push(tableNames[i]);
	}
	tableName2 = tableTemp.join('-');

	data.tableName1 = tableName1;
	data.tableName2 = tableName2;
	
	return data;
}

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
		qiao.file.mkdir(destFile);
		
		// write file
		fs.writeFileSync(destFile, data);
	}catch(e){
		console.log(e);
	}
};