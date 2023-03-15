// fs
import { pathExists, stat } from 'fs-extra';

/**
 * is exists
 * @param {*} path
 * @returns
 */
export const isExists = async (path) => {
  return await pathExists(path);
};

/**
 * is dir
 * @param {*} dir
 * @returns
 */
export const isDir = async (dir) => {
  // check
  const dirExists = await isExists(dir);
  if (!dirExists) return;

  // stat
  const statRes = await stat(dir);
  return statRes.isDirectory();
};
