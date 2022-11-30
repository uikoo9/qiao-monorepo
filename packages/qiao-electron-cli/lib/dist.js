'use strict';

// path
var path = require('path');

// q
var q = require('qiao-file');

// checker
var checker = require('./_check.js');

/**
 * dist
 * @param {*} srcPath
 * @param {*} distPath
 * @param {*} srcFiles
 * @returns
 */
module.exports = function (config) {
  // check
  checker.checkConfig(config);

  // vars
  var root = process.cwd();
  var src = path.resolve(root, config.srcPath);
  var dist = path.resolve(root, config.distPath);
  var srcFiles = config.srcFiles;

  // mkdir
  mkDir(dist);

  // cp file or folder
  for (var i = 0; i < srcFiles.length; i++) cpFileOrFolder(src, dist, srcFiles[i]);
};

// make electron-dist dir
function mkDir(dir) {
  var res = 'success';
  try {
    // rm
    if (q.isExists(dir)) q.rm(`${dir}/`);

    // mkdir
    q.mkdir(`${dir}/`);
  } catch (e) {
    console.log(e);
    res = 'fail';
  }

  console.log(`make dir: ${dir} ${res}`);
}

// cp file or folder
function cpFileOrFolder(src, dest, file) {
  var srcFilePath = path.resolve(src, file);
  var destFilePath = path.resolve(dest, file);

  var res = 'success';
  try {
    q.cp(srcFilePath, destFilePath);
  } catch (e) {
    console.log(e);
    res = 'fail';
  }

  console.log(`cp: ${srcFilePath} ${res}`);
}
