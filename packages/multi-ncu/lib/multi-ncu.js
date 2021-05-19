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

var fs = require('fs');

// vars
var subFolders = [];

/**
 * mult ncu
 */
exports.multiNCU = function(folderName){
	// check folder name
	if(!folderName) return 'need folder name';

	// check folder name is folder
	var isExist = isExists(folderName);
	if(!isExist) return 'folder is not exists';

	// get sub folders
	lsdir(folderName);
	console.log(subFolders);
};

// is exists
function isExists(dir){
	try{
		fs.accessSync(dir);
		return true;
	}catch(e){
		return false;
	}
}

// ls dir
function lsdir(dir){
	fs.readdirSync(dir).forEach(function(name){
		var stat = fs.statSync(dir + name);
		if(!stat.isDirectory()) return;

		subFolders.push(dir + name);
	});
}
