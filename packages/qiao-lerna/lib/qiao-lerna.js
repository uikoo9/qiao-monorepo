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
var q = {};
q.console 	= require('qiao-console');
q.process 	= require('qiao-process');
q.parallel	= require('qiao-parallel');

// fs
var fs = require('./util/fs.js');

// ncu
var ncu = require('./util/ncu.js');

// line
var line = 0;

/**
 * mult ncu
 */
exports.multiNCU = async function(folderName){
	// clear
	q.console.clear();

	// start
	q.console.writeLine(line++, `start operating folder: ${folderName}`);

	// check folder name
	if(!folderName){
		q.console.writeLine(line, 'need folder name');
		return;
	}

	// dir
	var dir = fs.path.resolve(process.cwd(), folderName) + fs.path.sep;

	// check dir is folder
	var isExist = fs.isExists(dir);
	if(!isExist){
		q.console.writeLine(line, 'folder is not exists');
		return;
	}

	// get sub folders
	fs.lsdir(dir);
	if(!fs.subFolders || !fs.subFolders.length){
		q.console.writeLine(line, 'empty folder');
		return;
	}

	// funcs
	var funcs = [];
	for(var i=0; i<fs.subFolders.length; i++){
		funcs.push(handler);
	}
	// console.log(funcs);
	q.parallel.parallelByIIFE(funcs, fs.subFolders, callback, complete);

};

async function handler(folderName){
	var res 	= await ncu.ncuSubFolders(folderName);
	var json	= getJson(res);
	var msg		= `${folderName} : ${json}`;

	return msg;
}

// get json
function getJson(s){
	try{
		return JSON.stringify(s);
	}catch(e){
		return s;
	}
}

// callback
function callback(index, res){
    q.console.writeLine(line + index, res);
}

// complete
function complete(l){
	q.console.writeLine(line + l, '');
	q.console.writeLine(line + l + 1, 'multi update npm packages end');
}