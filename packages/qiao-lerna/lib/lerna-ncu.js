'use strict';

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

// check dir
var checkDir = require('./util/check-dir.js');

// handler
var handlerByFork = require('./util/handler-ncu-fork.js');
var handlerByParallel = require('./util/handler-ncu-parallel.js');

// line
var line = 0;

/**
 * mult ncu
 */
module.exports = async function (folderName) {
	// clear && start
	q.clear();
	q.writeLine(line++, `start operating folder: ${folderName}`);

	// dir
	var subFolders = checkDir(folderName);

	// parallel
	handlerByParallel(subFolders, line);
	// handlerByFork(subFolders, line);
};