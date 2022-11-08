'use strict';

var qiaoConsole = require('qiao-console');
var qiaoFile = require('qiao-file');
var qiaoParallel = require('qiao-parallel');
var qiaoNpms = require('qiao-npms');
var npmCheckUpdates = require('npm-check-updates');

// qiao

// line
let line$4 = 0;

// sub folders
const subFolders = [];

// ls dir
const lsdir = (dir) => {
    qiaoFile.fs.readdirSync(dir).forEach((name) => {
        const stat = qiaoFile.fs.statSync(dir + name);
        if (!stat.isDirectory()) return;

        subFolders.push(dir + name);
    });
};

/**
 * check dir
 * @param {*} folderName 
 * @returns 
 */
const checkDir = (folderName) => {
    // check folder name
    if (!folderName) {
        qiaoConsole.writeLine(line$4, 'need folder name');
        return;
    }

    // dir
    const dir = qiaoFile.path.resolve(process.cwd(), folderName) + qiaoFile.path.sep;

    // check dir is folder
    if (!qiaoFile.isExists(dir)) {
        qiaoConsole.writeLine(line$4, 'folder is not exists');
        return;
    }

    // get sub folders
    lsdir(dir);
    if (!subFolders || !subFolders.length) {
        qiaoConsole.writeLine(line$4, 'empty folder');
        return;
    }

    return subFolders;
};

// qiao-console

// line
let line$3;

/**
 * set line
 * @param {*} l 
 */
const setLine = (l) => {
    line$3 = l;
};

/**
 * callback
 * @param {*} index 
 * @param {*} res 
 */
const callback = (index, res) => {
    qiaoConsole.writeLine(line$3 + index, res);
};

/**
 * complete
 * @param {*} l 
 */
const complete = (l) => {
    qiaoConsole.writeLine(line$3 + l, '');
    qiaoConsole.writeLine(line$3 + l + 1, 'qiao-lerna end');
};

// fs

/**
 * get pkg info
 * @param {*} dir 
 * @param {*} checkPrivate 
 * @returns 
 */
const getPkgInfo = (dir, checkPrivate) => {
    // package file
    const packageFile = qiaoFile.path.resolve(dir, 'package.json');
    if (!qiaoFile.isExists(packageFile)) return `${dir} : package.json not exists`;

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

// qiao-npms

/**
 * handler
 * @param {*} folderName 
 * @returns 
 */
const handler$2 = async (folderName) => {
    // pkg
    const pkgInfo = getPkgInfo(folderName, true);
    if (typeof pkgInfo == 'string') return pkgInfo;

    // download counts
    try {
        const res = await qiaoNpms.downloadCountsLastMonth(pkgInfo.packageName);
        if (!res) return `${pkgInfo.packageName} : download counts err`;

        return `${pkgInfo.packageName} : ${res.downloads}`;
    } catch (e) {
        return `${pkgInfo.packageName} : download counts err`;
    }
};

// qiao-parallel

/**
 * handle download counts
 * @param {*} folders 
 * @param {*} line 
 */
const handleDownloadCounts = (folders, line) => {
    setLine(line);

    qiaoParallel.parallelByIIFE(handler$2, folders, callback, complete);
};

// qiao-console

// line
let line$2 = 0;

/**
 * download counts
 * @param {*} folderName 
 */
const downloadCounts = (folderName) => {
    // clear && start
    qiaoConsole.clear();
    qiaoConsole.writeLine(line$2++, `start operating folder: ${folderName}`);

    // dir
    const subFolders = checkDir(folderName);

    // handler
    handleDownloadCounts(subFolders, line$2);
};

// ncu

/**
 * handler
 * @param {*} folderName 
 * @returns 
 */
const handler$1 = async (folderName) => {
    // pkg
    const pkgInfo = getPkgInfo(folderName);
    if (typeof pkgInfo == 'string') return pkgInfo;

    // ncu
    const upgraded = await npmCheckUpdates.run({
        packageFile: pkgInfo.packageFile,
        upgrade: false
    });

    const json = getJson$1(upgraded);
    return `${pkgInfo.packageName} : ${json}`;
};

// get json
function getJson$1(s) {
    try {
        return JSON.stringify(s);
    } catch (e) {
        return s;
    }
}

// qiao-parallel

/**
 * handle multi ncu
 * @param {*} folders 
 * @param {*} line 
 */
const handleMultiNCU = async (folders, line) => {
    setLine(line);

    qiaoParallel.parallelByIIFE(handler$1, folders, callback, complete);
};

/**
 * qiao-lerna
 *  1.判断输入的目标文件夹是否存在且是文件夹
 * 	2.获取目标文件夹下的子文件夹数组
 * 	3.遍历该数组
 * 	4.每个子文件夹下执行ncu -u
 * 	5.每个子文件夹下执行npm i
 * 	6.以上要在控制台及时显示回馈
 * 	7.最好是多进程执行以上操作
 */

// line
let line$1 = 0;

/**
 * multi ncu
 * @param {*} folderName 
 */
const multiNCU = async (folderName) => {
    // clear && start
    qiaoConsole.clear();
    qiaoConsole.writeLine(line$1++, `start operating folder: ${folderName}`);

    // dir
    const subFolders = checkDir(folderName);

    // parallel
    handleMultiNCU(subFolders, line$1);
};

// pkg

// is dev
let isDev;

/**
 * set is dev
 * @param {*} dev 
 */
const setIsDev = (dev) => {
    isDev = dev;
};

/**
 * handler
 * @param {*} folderName 
 * @returns 
 */
const handler = (folderName) => {
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

// qiao-parallel

/**
 * handle pkg
 * @param {*} folders 
 * @param {*} line 
 * @param {*} isDev 
 */
const handlePkg = async (folders, line, isDev) => {
    setLine(line);
    setIsDev(isDev);

    qiaoParallel.parallelByIIFE(handler, folders, callback, complete);
};

// qiao-console

// line
let line = 0;

/**
 * pkg
 * @param {*} folderName 
 * @param {*} isDev 
 */
const pkg = async (folderName, isDev) => {
    // clear && start
    qiaoConsole.clear();
    qiaoConsole.writeLine(line++, `start operating folder: ${folderName}`);

    // dir
    const subFolders = checkDir(folderName);

    // handler
    handlePkg(subFolders, line, isDev);
};

exports.downloadCounts = downloadCounts;
exports.multiNCU = multiNCU;
exports.pkg = pkg;
