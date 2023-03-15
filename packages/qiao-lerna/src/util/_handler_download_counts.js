// qiao-npms
import { downloadCountsLastMonth } from 'qiao-npms';

// pkg
import { getPkgInfo } from './_pkg.js';

/**
 * handler
 * @param {*} folderName
 * @returns
 */
export const handler = async (folderName) => {
  // pkg
  const pkgInfo = await getPkgInfo(folderName, true);
  if (typeof pkgInfo == 'string') return pkgInfo;

  // download counts
  try {
    const res = await downloadCountsLastMonth(pkgInfo.packageName);
    if (!res) return `${pkgInfo.packageName} : download counts err`;

    return `${pkgInfo.packageName} : ${res.downloads}`;
  } catch (e) {
    return `${pkgInfo.packageName} : download counts err, ${e.message}`;
  }
};
