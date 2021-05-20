'use strict';

// ncu
var ncu = require('./ncu.js');

// q
var q = {};
q.process = require('qiao.util.process');

// handler folder
async function handlerFolder(folderName){
	var folderName = process && process.argv && process.argv.length > 2 && process.argv[2];
	if(!folderName){
        q.process.send('need folder name');
        return;
	}

	q.process.send(`${folderName} ...`);
	
	var res 	= await ncu.ncuSubFolders(folderName);
	var json	= getJson(res);
	var str		= `${folderName} : ${json}`;

	q.process.send(str);
}

// get json
function getJson(s){
	try{
		return JSON.stringify(s);
	}catch(e){
		return s;
	}
}

handlerFolder();