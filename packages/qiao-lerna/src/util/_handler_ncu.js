// ncu
import { run } from 'npm-check-updates';

// pkg
import { getPkgInfo } from './_pkg.js';

/**
 * handler
 * @param {*} folderName
 * @returns
 */
export const handler = async (folderName) => {
  // pkg
  const pkgInfo = getPkgInfo(folderName);
  if (typeof pkgInfo == 'string') return pkgInfo;

  // ncu
  const upgraded = await run({
    packageFile: pkgInfo.packageFile,
    upgrade: false,
  });

  const json = getJson(upgraded);
  return `${pkgInfo.packageName} : ${json}`;
};

// get json
function getJson(s) {
  try {
    return JSON.stringify(s);
  } catch (e) {
    return s;
  }
}
