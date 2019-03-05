'use strict';

var fs			= require('fs');
var qiao 		= require('qiao.util.all');
var template	= require('art-template');

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