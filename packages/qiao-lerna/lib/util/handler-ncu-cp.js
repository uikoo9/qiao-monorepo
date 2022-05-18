'use strict';

// handler
var handler	= require('./_handler_ncu.js');

// handler ncu cp
async function handlerNCUCP(){
	var msg = await handler(process.argv[2]);
	process.send(msg);
}

handlerNCUCP();