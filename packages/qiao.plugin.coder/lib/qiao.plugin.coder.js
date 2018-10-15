'use strict';

var fs			= require('fs');
var template	= require('art-template');

/**
 * tableNameToClassName
 * 	tableName : table name
 */
exports.tableNameToClassName = function(tableName){
	if(!tableName){
		console.log('need table name!');
		return;
	}
	
	var res		= [];
	var strs 	= tableName.split('_');
	for(var i=0; i<strs.length; i++){
		if(i == 0) continue;
		
		var str = strs[i];
		var strLower = str.toLowerCase();
		
		res.push(strLower.charAt(0).toUpperCase() + strLower.substr(1, strLower.length));
	}
	
	return res.join('');
};

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