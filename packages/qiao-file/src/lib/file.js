'use strict';

// fs
import fs from 'fs';

// path
import path from 'path';

/**
 * extname
 * 	filePath : file path
 */
export const extname = (filePath) => {
    if(!filePath) return null;
    
    return path.extname(filePath.toLowerCase());
};

/**
 * readFile
 * @param {*} filePath 
 * @param {*} options https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsreadfilesyncpath-options
 */
export const readFile = (filePath, options) => {
    // check
    if(!filePath) return;

    // opt
    const opt = {encoding:'utf8'};
    options = options || opt;

    return fs.readFileSync(filePath, options);
};