'use strict';

// compressing
var compressing = require('compressing');

// compress types
var compressTypes = ['tar', 'gzip', 'tgz', 'zip'];

/**
 * uncompress
 * 	compressType, tar, gzip, tgz, zip
 *  compressFile
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.uncompress = function(compressType, compressFile, destPath, onSuccess, onFail){
    if(!compressTypes.includes(compressType)){
        if(onFail) onFail(new Error('compress type only support: tar, gzip, tgz, zip'));
        return;
    }

    var compress = compressing[compressType];
    compress
        .uncompress(compressFile, destPath)
        .then(function(){
            if(onSuccess) onSuccess();
        })
        .catch(function(e){
            if(onFail) onFail(e);
        });
};

/**
 * uncompress sync
 * 	compressType, tar, gzip, tgz, zip
 *  compressFile
 *  destPath
 */
exports.uncompressSync = function(compressType, compressFile, destPath){
	return new Promise(function(resolve, reject){
        exports.uncompress(compressType, compressFile, destPath, function(){
            resolve();
        }, function(e){
            reject(e);
        });
	});
};