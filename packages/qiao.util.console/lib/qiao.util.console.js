'use strict';

/**
 * clear
 */
exports.clear = function(){
	process.stdout.cursorTo(0,0);
    process.stdout.clearScreenDown();
};

/**
 * clear line
 */
exports.clearLine = function(){
    process.stdout.clearLine();
};

/**
 * move to
 */
exports.moveTo = function(x, y){
    process.stdout.cursorTo(x, y);
};

/**
 * write
 */
exports.write = function(msg){
    process.stdout.write(msg);
};

/**
 * write line x y
 */
exports.writeLineXY = function(x, y, msg){
	process.stdout.cursorTo(x, y);
	process.stdout.clearLine();
	process.stdout.write(msg);
	process.stdout.write('\n');
};

/**
 * write line
 */
exports.writeLine = function(y, msg){
	process.stdout.cursorTo(0, y);
	process.stdout.clearLine();
	process.stdout.write(msg);
	process.stdout.write('\n');
};