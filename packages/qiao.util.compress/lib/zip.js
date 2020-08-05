'use strict';

// require
var _uncompress     = require('./_uncompress.js');
var _compress       = require('./_compress.js');

// /**
//  * uncompress
//  * 	compressType, tar, gzip, tgz, zip
//  *  compressFile
//  *  destPath
//  *  onSuccess
//  *  onFail
//  */
// exports.uncompress = function(compressType, compressFile, destPath, onSuccess, onFail){
//     if(!compressTypes.includes(compressType)){
//         if(onFail) onFail(new Error('compress type only support: tar, gzip, tgz, zip'));
//         return;
//     }

//     var compress = compressing[compressType];
//     compress
//         .uncompress(compressFile, destPath)
//         .then(function(){
//             if(onSuccess) onSuccess();
//         })
//         .catch(function(e){
//             if(onFail) onFail(e);
//         });
// };

// /**
//  * uncompress sync
//  * 	compressType, tar, gzip, tgz, zip
//  *  compressFile
//  *  destPath
//  */
// exports.uncompressSync = function(compressType, compressFile, destPath){
// 	return new Promise(function(resolve, reject){
//         exports.uncompress(compressType, compressFile, destPath, function(){
//             resolve();
//         }, function(e){
//             reject(e);
//         });
// 	});
// };

/**
 * zip file
 *  sourceFile
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.zipFile = function(sourceFile, destPath, onSuccess, onFail){
    _compress.compressFile('zip', sourceFile, destPath, function(){
        if(onSuccess) onSuccess();
    }, function(e){
        if(onFail) onFail(e);
    });
};

/**
 * zip file sync
 *  sourceFile
 *  destPath
 */
exports.zipFileSync = function(sourceFile, destPath){
	return new Promise(function(resolve, reject){
        exports.zipFile(sourceFile, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};

// /**
//  * compress folder
//  * 	compressType, tar, gzip, tgz, zip
//  *  sourceFolder
//  *  destPath
//  *  onSuccess
//  *  onFail
//  */
// exports.compressFolder = function(compressType, sourceFolder, destPath, onSuccess, onFail){
//     if(!compressTypes.includes(compressType)){
//         if(onFail) onFail(new Error('compress type only support: tar, gzip, tgz, zip'));
//         return;
//     }

//     var compress = compressing[compressType];
//     compress
//         .compressDir(sourceFolder, destPath)
//         .then(function(){
//             if(onSuccess) onSuccess();
//         })
//         .catch(function(e){
//             if(onFail) onFail(e);
//         });
// };

// /**
//  * compress folder sync
//  * 	compressType, tar, gzip, tgz, zip
//  *  sourceFolder
//  *  destPath
//  */
// exports.compressFolderSync = function(compressType, sourceFolder, destPath){
// 	return new Promise(function(resolve, reject){
//         exports.compressFolder(compressType, sourceFolder, destPath, function(){
//             resolve();
//         }, function(e){
//             reject(e);
//         });
// 	});
// };