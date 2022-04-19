'use strict';

// fs
import fs from 'fs';

/**
 * isExists
 * 	fpath : file or folder path
 */
export const isExists = (fpath) => {
    try{
        fs.accessSync(fpath);
        
        return true;
    }catch(e){
        return false;
    }
};