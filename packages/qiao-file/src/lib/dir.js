// path
import path from 'path';

// fs
import { readdir, ensureDir } from 'fs-extra';

// is
import { isDir } from './is.js';

/**
 * mk dir
 * @param {*} dir
 * @returns
 */
export const mkdir = async (dir) => {
  try {
    await ensureDir(dir);
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
