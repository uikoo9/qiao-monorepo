// fs
import { path, isExists } from 'qiao-file';

/**
 * get pkg info
 * @param {*} dir
 * @param {*} checkPrivate
 * @returns
 */
export const getPkgInfo = async (dir, checkPrivate) => {
  // package file
  const packageFile = path.resolve(dir, 'package.json');
  const packageFileExists = await isExists(packageFile);
  if (!packageFileExists) return `${dir} : package.json not exists`;

  // package json
  const packageJson = getPackage(packageFile);
  if (!packageJson) return `${dir} : package.json err`;

  // package name
  const packageName = packageJson.name;
  if (packageJson.private && checkPrivate) return `${packageName} : private package`;

  // return
  return {
    packageFile: packageFile,
    packageJson: packageJson,
    packageName: packageName,
  };
};

// get package
function getPackage(p) {
  try {
    return require(p);
  } catch (e) {
    return;
  }
}
