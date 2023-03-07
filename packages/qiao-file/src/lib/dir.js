// fs
import fs from 'fs';

// path
import path from 'path';

// fs
import { readdir } from 'fs-extra';

// is
import { isDir, isExists } from './is.js';

/**
 * mk dir
 * 	dir : must end with /
 */
export const mkdir = (dir) => {
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
export const readDir = (dirPath) => {
  return new Promise((resolve) => {
    readdir(dirPath, (err, files) => {
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
export const lsdir = async (dir) => {
  let folders = [];
  let files = [];
  await getFoldersAndFiles(dir, folders, files);

  return {
    folders: folders,
    files: files,
  };
};

// get folders and files
export const getFoldersAndFiles = async (fpath, folders, files) => {
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
};

/**
 * ls tree
 * @param {*} dir
 * @param {*} ignores
 * @returns
 */
export const lstree = async (dir, ignores) => {
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

/**
 * check dir
 * @param {*} dir
 * @param {*} list
 */
export const checkDir = (dir, list) => {
  const pdir = path.dirname(dir);

  if (!isExists(pdir)) {
    list.push(pdir);
    checkDir(pdir, list);
  }
};
