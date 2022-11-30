// get latest
import { getLatestVersion } from '../util/fetch.js';

/**
 * get version
 * @param {*} packageName
 * @returns
 */
export const getVersion = async (packageName) => {
  if (!packageName) return;

  const res = await getLatestVersion(packageName);
  if (!res || !res['dist-tags'] || !res['dist-tags'].latest) return;

  return res['dist-tags'].latest;
};
