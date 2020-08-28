'use strict';

/**
 * uploadFolderSync
 * 上传文件夹
 * 	client
 * 	destFolder，目标路径，末尾不要添加/
 * 	sourceFolder，待上传的文件夹，末尾不要加/
 */
exports.uploadFolderSync = function(client, destFolder, sourceFolder){
	return new Promise(function(resolve, reject){
		exports.uploadFolder(client, destFolder, sourceFolder, function(rs){
			return resolve(rs);
		});
	});
};
