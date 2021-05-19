/**
 * multi-ncu
 *  1.判断输入的目标文件夹是否存在且是文件夹
 * 	2.获取目标文件夹下的子文件夹数组
 * 	3.遍历该数组
 * 	4.每个子文件夹下执行ncu -u
 * 	5.每个子文件夹下执行npm i
 * 	6.以上要在控制台及时显示回馈
 * 	7.最好是多进程执行以上操作
 */

// fs
var fs = require('./util/fs.js');

// ncu
var ncu = require('npm-check-updates');

/**
 * mult ncu
 */
exports.multiNCU = function(folderName){
	// check folder name
	if(!folderName) return 'need folder name';

	// check folder name is folder
	var isExist = fs.isExists(folderName);
	if(!isExist) return 'folder is not exists';

	// get sub folders
	fs.lsdir(folderName);
	if(!fs.subFolders || !fs.subFolders.length) return 'empty folder';

	// ncu
	var subFolders = fs.subFolders;
	for(var i=0; i<subFolders.length; i++){
		var item = subFolders[i];
		ncuSubFolders(item);
	}
};

// ncu
async function ncuSubFolders(dir){
	var packageFile = fs.resolve(dir, 'package.json');
	if(!fs.isExists(packageFile)) return 'package.json not exists';

	var upgraded = await ncu.run({
		packageFile: packageFile,
		upgrade: false
	});
	
	console.log(upgraded);
}