'use strict';

var fs			= require('fs');
var template	= require('art-template');

/**
 * genFile
 * 	templateFile : template file path
 * 	templateData : template data json file path
 * 	destFile : dest file path
 */
exports.genFile = function(templateFile, templateData, destFile){
	var html = template(templateFile, templateData);
	console.log(html);
};