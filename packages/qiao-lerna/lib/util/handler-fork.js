'use strict';

// ncu
var ncu = require('./ncu.js');

// q
var q = {};
q.process = require('qiao-process');

// handler folder
async function handlerFolder(){
	var folderName = process && process.argv && process.argv.length > 2 && process.argv[2];
	if(!folderName){
        q.process.send('need folder name');
        return;
	}

	q.process.send(`${folderName} ...`);
	
	var msg = await ncu.ncuSubFolders(folderName);
	q.process.send(msg);
}

handlerFolder();