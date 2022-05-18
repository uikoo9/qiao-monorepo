'use strict';

// handler
var handler	= require('./_handler.js');

// handler fork
async function handlerFork(){
	var msg = await handler(process.argv[2]);
	process.send(msg);
}

handlerFork();