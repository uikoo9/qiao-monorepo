'use strict';

var path	= require('path');
var qiao	= require('../../lib/_qiao.js');
qiao.coder	= require('../../lib/qiao-server-coder.js');

/**
 * gen
 * 	tableName 	: table name, like t_blog_type
 * 	destFolder	: dest folder
 */
exports.gen = async function(tableName, destFolder){
	var data = await qiao.coder.genData(tableName);
	console.log(data);
    
	// gen code
	genPage(destFolder, data);
    genModal(destFolder, data);
	
	return;
};

// gen page
function genPage(destFolder, data){
	var pageTemp = path.resolve(__dirname, './pages/page.art');
	var pageDest = path.resolve(destFolder, `./src/${data.tableName1}-${data.tableName2}.jsx`);
	qiao.coder.genFileByData(pageTemp, data, pageDest);
}

// gen modal
function genModal(destFolder, data){
	var pageTemp = path.resolve(__dirname, './pages/modal.art');
	var pageDest = path.resolve(destFolder, `./src/${data.tableName1}-${data.tableName2}-modal.jsx`);
	qiao.coder.genFileByData(pageTemp, data, pageDest);
}