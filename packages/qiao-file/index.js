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
 * cp
 * @param {*} src file or folder src path
 * @param {*} dest file or folder dest path
 * @returns
 */
const cp = async (src, dest) => {
  try {
    await fsExtra.copy(src, dest);
    return true;
  } catch (e) {
    console.log(e);
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

// /**
//  * rm
//  * 	fpath, file or folder path, folder must end with /
//  */
// export const rm = (fpath) => {
//   try {
//     // rm file
//     const pathStat = fs.statSync(fpath);
//     if (!pathStat.isDirectory()) {
//       fs.unlinkSync(fpath);

//       return true;
//     }

//     // ls dir
//     let folders = [];
//     let files = [];
//     getFoldersAndFiles(fpath, folders, files);
//     folders.reverse();

//     // rm folder
//     for (let i = 0; i < files.length; i++) fs.unlinkSync(files[i].path + files[i].name);
//     for (let i = 0; i < folders.length; i++) fs.rmdirSync(folders[i].path + folders[i].name);
//     fs.rmdirSync(fpath);

//     // return
//     return true;
//   } catch (e) {
//     console.log(e);
//     return false;
//   }
// };

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

// path

/**
 * mk dir
 * @param {*} dir
 * @returns
 */
const mkdir = async (dir) => {
  try {
    await fsExtra.ensureDir(dir);
    return true;
  } catch (e) {
    console.log(e);
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

/**
 * ls dir
 * @param {*} dir
 * @returns
 */
const lsdir = async (dir) => {
  let folders = [];
  let files = [];
  await getFoldersAndFiles(dir, folders, files);

  return {
    folders: folders,
    files: files,
  };
};

// get folders and files
async function getFoldersAndFiles(fpath, folders, files) {
  // check
  const dirs = await readDir(fpath);
  if (!dirs) return;

  // read
  const realPath = path.resolve(fpath);
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    const isDirRes = await isDir(dir);
    if (isDirRes) {
      folders.push({
        path: realPath,
        name: dir,
      });

      await getFoldersAndFiles(path.resolve(realPath, `./${dir}`), folders, files);
    } else {
      files.push({
        path: realPath,
        name: dir,
      });
    }
  }
}

/**
 * ls tree
 * @param {*} dir
 * @param {*} ignores
 * @returns
 */
const lstree = async (dir, ignores) => {
  let fileTree = [];
  await getFileTree(dir, fileTree, ignores);

  return fileTree;
};

// get file tree
async function getFileTree(fpath, fileTree, ignores) {
  // check
  const dirs = await readDir(fpath);
  if (!dirs) return;

  // read
  const realPath = path.resolve(fpath);
  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];

    // ignore
    const filePath = path.resolve(realPath, dir);
    if (isFileTreeIgnore(filePath, ignores)) continue;

    // read
    const isDirRes = await isDir(dir);
    if (isDirRes) {
      let info = {};
      info.path = realPath;
      info.name = dir;
      info.children = [];

      fileTree.push(info);

      await getFileTree(filePath, info.children, ignores);
    } else {
      let info = {};
      info.path = realPath;
      info.name = dir;

      fileTree.push(info);
    }
  }
}

// is file tree ignore
function isFileTreeIgnore(rpath, ignores) {
  if (!rpath || !ignores || !ignores.length) return;

  let ignore = false;
  for (let i = 0; i < ignores.length; i++) {
    if (rpath.indexOf(ignores[i]) > -1) ignore = true;
  }

  return ignore;
}

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
exports.writeFile = writeFile;
