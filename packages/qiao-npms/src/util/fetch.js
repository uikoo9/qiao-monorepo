// qiao
import { get } from 'qiao-ajax';

/**
 * get download counts
 *  https://github.com/npm/registry/blob/master/docs/download-counts.md
 * @param {*} packageName
 * @param {*} type
 * @returns
 */
export const getDownloadCounts = async (packageName, type) => {
  // check
  if (!packageName || !type) return;

  // res
  const url = `https://api.npmjs.org/downloads/point/${type}/${packageName}`;
  const res = await get(url);

  // check res
  if (!res || res.status != 200) return;

  // return
  return res.data;
};

/**
 * get latest version
 * @param {*} packageName
 * @returns
 */
export const getLatestVersion = async (packageName) => {
  // check
  if (!packageName) return;

  // res
  const url = `https://registry.npmjs.org/${packageName}`;
  const res = await get(url, {
    headers: {
      Accept: 'application/vnd.npm.install-v1+json',
    },
  });

  // check res
  if (!res || res.status != 200) return;

  // return
  return res.data;
};
