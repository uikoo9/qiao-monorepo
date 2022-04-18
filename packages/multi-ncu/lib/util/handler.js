'use strict';

// fs
var fs = require('./fs.js');

// q
var q = {};
q.console = require('qiao.util.console');
q.process = require('qiao.util.process');

// line
var line = 2;
var count = 0;

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

	// dir
	var dir = fs.path.resolve(process.cwd(), folderName) + fs.path.sep;

	// check dir is folder
	var isExist = fs.isExists(dir);
	if(!isExist) return 'folder is not exists';

	// get sub folders
	fs.lsdir(dir);
	if(!fs.subFolders || !fs.subFolders.length) return 'empty folder';

	// ncu
	var subFolders = fs.subFolders;
	for(var i=0; i<subFolders.length; i++){
		(function(item, i, l){
            handlerIt(item, i, l);
        })(subFolders[i], i, subFolders.length);
	}

	return;
}

// handler it
function handlerIt(item, i, l){
	var jsPath = fs.path.resolve(__dirname, './handler-fork.js');
	var args = [item];
	q.process.fork(jsPath, args, function(msg){
		q.console.writeLine(line + i, msg);
	}, function(){
		count++;

		if(count == l){
			q.console.writeLine(line + l, '');
			q.console.writeLine(line + l + 1, 'multi update npm packages end');
		}
	});
}