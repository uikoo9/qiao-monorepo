'use strict';

var fs = require('fs');
var path = require('path');
var fsExtra = require('fs-extra');
var readline = require('readline');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var fs__namespace = /*#__PURE__*/_interopNamespaceDefault(fs);
var path__namespace = /*#__PURE__*/_interopNamespaceDefault(path);

// fs

/**
 * is exists
 * @param {*} path
 * @returns
 */
const isExists = async (path) => {
  return await fsExtra.pathExists(path);
};

/**
 * is dir
 * @param {*} path
 * @returns
 */
const isDir = (path) => {
  return new Promise((resolve) => {
    fsExtra.stat(path, (err, stats) => {
      if (err) return resolve(false);

      return resolve(stats.isDirectory());
    });
  });
};

// fs

/**
 * get folders and files
 * @param {*} fpath
 * @param {*} folders
 * @param {*} files
 */
const getFoldersAndFiles = (fpath, folders, files) => {
  fs.readdirSync(fpath).forEach(function (name) {
    const stat = fs.statSync(fpath + name);
    if (stat.isDirectory()) {
      folders.push({
        path: fpath,
        name: name,
      });

      getFoldersAndFiles(fpath + name + '/', folders, files);
    } else {
      files.push({
        path: fpath,
        name: name,
      });
    }
  });
};

/**
 * get file tree
 * @param {*} fpath
 * @param {*} fileTree
 * @param {*} ignores
 */
const getFileTree = (fpath, fileTree, ignores) => {
  fs.readdirSync(fpath).forEach(function (name) {
    const rpath = fpath + name;
    if (isFileTreeIgnore(rpath, ignores)) return;

    const stat = fs.statSync(rpath);
    if (stat.isDirectory()) {
      let info = {};
      info.path = fpath;
      info.name = name;
      info.children = [];

      fileTree.push(info);

      getFileTree(rpath + '/', info.children, ignores);
    } else {
      let info = {};
      info.path = fpath;
      info.name = name;

      fileTree.push(info);
    }
  });
};

/**
 * check dir
 * @param {*} dir
 * @param {*} list
 */
const checkDir = (dir, list) => {
  const pdir = path.dirname(dir);

  if (!isExists(pdir)) {
    list.push(pdir);
    checkDir(pdir, list);
  }
};

// is file tree ignore
const isFileTreeIgnore = (rpath, ignores) => {
  if (!rpath || !ignores || !ignores.length) return;

  let ignore = false;
  for (let i = 0; i < ignores.length; i++) {
    if (rpath.indexOf(ignores[i]) > -1) ignore = true;
  }

  return ignore;
};

// fs

/**
 * cp
 * @param {*} src file or folder src path
 * @param {*} dest file or folder dest path
 * @returns
 */
const cp = (src, dest) => {
  try {
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
      fs.cpSync(src, dest, { recursive: true });
    } else {
      fs.copyFileSync(src, dest);
    }

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

/**
 * mv
 * @param {*} oldPath
 * @param {*} newPath
 */
const mv = (oldPath, newPath) => {
  try {
    fs.renameSync(oldPath, newPath);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

/**
 * rm
 * 	fpath, file or folder path, folder must end with /
 */
const rm = (fpath) => {
  try {
    // rm file
    const pathStat = fs.statSync(fpath);
    if (!pathStat.isDirectory()) {
      fs.unlinkSync(fpath);

      return true;
    }

    // ls dir
    let folders = [];
    let files = [];
    getFoldersAndFiles(fpath, folders, files);
    folders.reverse();

    // rm folder
    for (let i = 0; i < files.length; i++) fs.unlinkSync(files[i].path + files[i].name);
    for (let i = 0; i < folders.length; i++) fs.rmdirSync(folders[i].path + folders[i].name);
    fs.rmdirSync(fpath);

    // return
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

// fs

/**
 * ls dir
 * 	dir : must end with /
 */
const lsdir = (dir) => {
  let folders = [];
  let files = [];
  getFoldersAndFiles(dir, folders, files);

  return {
    folders: folders,
    files: files,
  };
};

/**
 * ls tree
 * @param {*} dir must end with /
 * @param {*} ignores
 * @returns
 */
const lstree = (dir, ignores) => {
  let fileTree = [];
  getFileTree(dir, fileTree, ignores);

  return fileTree;
};

/**
 * mk dir
 * 	dir : must end with /
 */
const mkdir = (dir) => {
  try {
    // check
    if (!dir || !dir.endsWith('/')) return false;

    // is exists
    if (isExists(dir)) return true;

    // check dir
    var dirs = [dir];
    checkDir(dir, dirs);

    // check dirs
    if (!dirs.length) return false;

    // mkdir
    dirs.reverse();
    for (var i = 0; i < dirs.length; i++) fs.mkdirSync(dirs[i]);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

/**
 * read dir
 * @param {*} dirPath 
 * @returns 
 */
const readDir = (dirPath) => {
  return new Promise((resolve) => {
    fsExtra.readdir(dirPath, (err, files) => {
      if (err) return resolve();

      return resolve(files);
    });
  });
};

// path

/**
 * extname
 * @param {*} filePath
 * @returns
 */
const extname = (filePath) => {
  if (!filePath) return;

  return path.extname(filePath.toLowerCase());
};

/**
 * readFile
 * @param {*} filePath
 * @param {*} options https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsreadfilesyncpath-options
 * @returns
 */
const readFile = async (filePath, options) => {
  // check
  if (!filePath) return;

  try {
    // opt
    const opt = { encoding: 'utf8' };
    options = options || opt;

    return await fsExtra.readFile(filePath, options);
  } catch (e) {
    console.log(e);
  }
};

/**
 * readFileLineByLine
 * @param {*} filePath
 * @param {*} onLine
 * @param {*} onClose
 */
const readFileLineByLine = (filePath, onLine, onClose) => {
  // rl
  const rl = readline.createInterface({
    input: fsExtra.createReadStream(filePath, { encoding: 'utf8' }),
  });

  // on
  rl.on('line', function (line) {
    if (onLine) onLine(line);
  });
  rl.on('close', function () {
    if (onClose) onClose();
  });
};

/**
 * writeFile
 * @param {*} filePath
 * @param {*} fileData
 * @param {*} options https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilesyncfile-data-options
 */
const writeFile = async (filePath, fileData, options) => {
  // check
  if (!filePath) return;

  try {
    // vars
    fileData = fileData || '';
    options = options || {};
    await fsExtra.outputFile(filePath, fileData, options);

    return true;
  } catch (e) {
    console.log(e);
  }
};

exports.fs = fs__namespace;
exports.path = path__namespace;
exports.cp = cp;
exports.extname = extname;
exports.isDir = isDir;
exports.isExists = isExists;
exports.lsdir = lsdir;
exports.lstree = lstree;
exports.mkdir = mkdir;
exports.mv = mv;
exports.readDir = readDir;
exports.readFile = readFile;
exports.readFileLineByLine = readFileLineByLine;
exports.rm = rm;
exports.writeFile = writeFile;
