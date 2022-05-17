'use strict';

// ncu
var ncu = require('./ncu.js');

// handler folder
async function handlerFolder(){
	var msg = await ncu.ncuSubFolders(process.argv[2]);
	process.send(msg);
}

handlerFolder();