'use strict';

// fs
var fs = require('./fs.js');

// q
var q = {};
q.console = require('qiao-console');
q.process = require('qiao-process');

// line
exports.line;

// count
var count = 0;

/**
 * mult ncu
 */
exports.multiNCU = async function(folders, line){
	// time
	console.time('multi ncu');

	// line
	exports.line = line;

	// handler
	for(var i=0; i<folders.length; i++){
		(function(item, i, l){
            handlerIt(item, i, l);
        })(folders[i], i, folders.length);
	}
};

// handler it
function handlerIt(item, i, l){
	var jsPath = fs.path.resolve(__dirname, './handler-fork.js');
	var args = [item];
	q.process.fork(jsPath, args, function(msg){
		q.console.writeLine(exports.line + i, msg);
	}, function(){
		count++;

		if(count == l){
			q.console.writeLine(exports.line + l, '');
			q.console.writeLine(exports.line + l + 1, 'multi update npm packages end');
			console.timeEnd('multi ncu');
		}
	});
}