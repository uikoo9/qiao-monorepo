'use strict';

// compressing
var compressing = require('compressing');

// compress types
var compressTypes = ['tar', 'gzip', 'tgz', 'zip'];

/**
 * compress file
 * 	compressType, tar, gzip, tgz, zip
 *  sourceFile
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.compressFile = function (compressType, sourceFile, destPath, onSuccess, onFail) {
  if (!compressTypes.includes(compressType)) {
    if (onFail) onFail(new Error('compress type only support: tar, gzip, tgz, zip'));
    return;
  }

  var compress = compressing[compressType];
  compress
    .compressFile(sourceFile, destPath)
    .then(function () {
      if (onSuccess) onSuccess();
    })
    .catch(function (e) {
      if (onFail) onFail(e);
    });
};

/**
 * compress file sync
 * 	compressType, tar, gzip, tgz, zip
 *  sourceFile
 *  destPath
 */
exports.compressFileSync = function (compressType, sourceFile, destPath) {
  return new Promise(function (resolve, reject) {
    exports.compressFile(
      compressType,
      sourceFile,
      destPath,
      function () {
        resolve();
      },
      function (e) {
        reject(e);
      },
    );
  });
};

/**
 * compress folder
 * 	compressType, tar, gzip, tgz, zip
 *  sourceFolder
 *  destPath
 *  onSuccess
 *  onFail
 */
exports.compressFolder = function (compressType, sourceFolder, destPath, onSuccess, onFail) {
  if (!compressTypes.includes(compressType)) {
    if (onFail) onFail(new Error('compress type only support: tar, gzip, tgz, zip'));
    return;
  }

  var compress = compressing[compressType];
  compress
    .compressDir(sourceFolder, destPath)
    .then(function () {
      if (onSuccess) onSuccess();
    })
    .catch(function (e) {
      if (onFail) onFail(e);
    });
};

/**
 * compress folder sync
 * 	compressType, tar, gzip, tgz, zip
 *  sourceFolder
 *  destPath
 */
exports.compressFolderSync = function (compressType, sourceFolder, destPath) {
  return new Promise(function (resolve, reject) {
    exports.compressFolder(
      compressType,
      sourceFolder,
      destPath,
      function () {
        resolve();
      },
      function (e) {
        reject(e);
      },
    );
  });
};
