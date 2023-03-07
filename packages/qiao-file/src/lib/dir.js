// fs
import fs from 'fs';

// path
import path from 'path';

// fs
import { readdir } from 'fs-extra';

// is
import { isDir, isExists } from './is.js';

// util
import { checkDir, getFileTree } from './util.js';

/**
 * ls tree
 * @param {*} dir must end with /
 * @param {*} ignores
 * @returns
 */
export const lstree = (dir, ignores) => {
  let fileTree = [];
  getFileTree(dir, fileTree, ignores);

  return fileTree;
};

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
 * get folders and files
 * @param {*} fpath
 * @param {*} folders
 * @param {*} files
 */
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
