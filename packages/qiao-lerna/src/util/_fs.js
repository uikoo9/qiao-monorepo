// fs
import fs from 'fs';

// path
export * as path from 'path';

// sub folders
export const subFolders = [];

/**
 * is exists
 * @param {string} dir 
 */
export const isExists = (dir) => {
    try {
        fs.accessSync(dir);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * ls dir
 * @param {string} dir 
 */
export const lsdir = (dir) => {
    fs.readdirSync(dir).forEach(function (name) {
        const stat = fs.statSync(dir + name);
        if (!stat.isDirectory()) return;

        subFolders.push(dir + name);
    });
};