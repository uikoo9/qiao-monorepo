// qiao-console
import { writeLine } from 'qiao-console';

// fs
import * as fs from './_fs.js';

// line
let line = 0;

/**
 * check dir
 * @param {*} folderName 
 * @returns 
 */
const checkDir = (folderName) => {
    // check folder name
    if (!folderName) {
        writeLine(line, 'need folder name');
        return;
    }

    // dir
    const dir = fs.path.resolve(process.cwd(), folderName) + fs.path.sep;

    // check dir is folder
    const isExist = fs.isExists(dir);
    if (!isExist) {
        writeLine(line, 'folder is not exists');
        return;
    }

    // get sub folders
    fs.lsdir(dir);
    if (!fs.subFolders || !fs.subFolders.length) {
        writeLine(line, 'empty folder');
        return;
    }

    return fs.subFolders;
};

export default checkDir;