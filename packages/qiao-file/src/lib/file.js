'use strict';

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