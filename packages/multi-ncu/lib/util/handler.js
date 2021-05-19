'use strict';

// fs
var fs = require('./fs.js');

// ncu
var ncu = require('./ncu.js');

// q
var q = {};
q.console = require('qiao.util.console');

// line
var line = 2;

/**
 * mult ncu
 */
exports.multiNCU = async function(folderName){
	// clear
	q.console.clear();

	// start
	q.console.writeLine(0, `start operating folder: ${folderName}`);
	var res = await handlerFolder(folderName);

	// check
	if(res) q.console.writeLine(line, res);
};

// handler folder
async function handlerFolder(folderName){
	// check folder name
	if(!folderName) return 'need folder name';

	// check folder name is folder
	var isExist = fs.isExists(folderName);
	if(!isExist) return 'folder is not exists';

	// get sub folders
	fs.lsdir(folderName);
	if(!fs.subFolders || !fs.subFolders.length) return 'empty folder';

	// ncu
	var subFolders = fs.subFolders;
	for(var i=0; i<subFolders.length; i++){
		var item	= subFolders[i];
		var res 	= await ncu.ncuSubFolders(item);
		var json	= getJson(res);
		var str		= `${item} : ${json}`;

		q.console.writeLine(line + i, str);
	}

	return;
}

// get json
function getJson(s){
	try{
		return JSON.stringify(s);
	}catch(e){
		return s;
	}
}