// fs
import { path, isExists } from './_fs.js';

/**
 * get pkg info
 * @param {*} dir 
 * @param {*} checkPrivate 
 * @returns 
 */
export const getPkgInfo = (dir, checkPrivate) => {
    // package file
    const packageFile = path.resolve(dir, 'package.json');
    if (!isExists(packageFile)) return `${dir} : package.json not exists`;

    // package json
    const packageJson = getPackage(packageFile);
    if(!packageJson) return `${dir} : package.json err`;

    // package name
    const packageName = packageJson.name;
    if (packageJson.private && checkPrivate) return `${packageName} : private package`;

    // return
    return {
        packageFile: packageFile,
        packageJson: packageJson,
        packageName: packageName
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