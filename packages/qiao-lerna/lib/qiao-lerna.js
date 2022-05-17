/**
 * qiao-lerna
 *  1.判断输入的目标文件夹是否存在且是文件夹
 * 	2.获取目标文件夹下的子文件夹数组
 * 	3.遍历该数组
 * 	4.每个子文件夹下执行ncu -u
 * 	5.每个子文件夹下执行npm i
 * 	6.以上要在控制台及时显示回馈
 * 	7.最好是多进程执行以上操作
 */

// q
var q = require('qiao-console');

// fs
var fs = require('./util/fs.js');

// handler
var handlerByFork		= require('./util/handler-by-fork.js');
var handlerByParallel 	= require('./util/handler-by-parallel.js');

// line
var line = 0;

/**
 * mult ncu
 */
exports.multiNCU = async function(folderName){
	// clear && start
	q.clear();
	q.writeLine(line++, `start operating folder: ${folderName}`);

	// dir
	checkDir(folderName);

	// parallel
	handlerByParallel.multiNCU(fs.subFolders, line);
	// handlerByFork.multiNCU(fs.subFolders, line);
};

// check dir
function checkDir(folderName){
	// check folder name
	if(!folderName){
		q.writeLine(line, 'need folder name');
		return;
	}

	// dir
	var dir = fs.path.resolve(process.cwd(), folderName) + fs.path.sep;

	// check dir is folder
	var isExist = fs.isExists(dir);
	if(!isExist){
		q.writeLine(line, 'folder is not exists');
		return;
	}

	// get sub folders
	fs.lsdir(dir);
	if(!fs.subFolders || !fs.subFolders.length){
		q.writeLine(line, 'empty folder');
		return;
	}
}