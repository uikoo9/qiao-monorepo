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
 * @param {*} path
 * @returns
 */
export const isDir = (path) => {
  return new Promise((resolve) => {
    stat(path, (err, stats) => {
      if (err) return resolve(false);

      return resolve(stats.isDirectory());
    });
  });
};
