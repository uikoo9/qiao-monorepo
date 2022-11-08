// pkg
import { getPkgInfo } from './_pkg.js';

// is dev
let isDev;

/**
 * set is dev
 * @param {*} dev 
 */
export const setIsDev = (dev) => {
    isDev = dev;
};

/**
 * handler
 * @param {*} folderName 
 * @returns 
 */
export const handler = (folderName) => {
    // pkg
    const pkgInfo = getPkgInfo(folderName);
    if (typeof pkgInfo == 'string') return pkgInfo;

    // package json
    const packageJson = pkgInfo.packageJson;
    const res = isDev ? packageJson.devDependencies : packageJson.dependencies;

    const json = getJson(res || {});
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