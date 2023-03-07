// fs
import { pathExists } from 'fs-extra';

/**
 * is exists
 * @param {*} path
 * @returns
 */
export const isExists = async (path) => {
  return await pathExists(path);
};
