'use strict';

// fs
import fs from 'fs';

// util
import { 
    checkDir, 
    getFileTree,
    getFoldersAndFiles 
} from './util.js';

/**
* ls dir
* 	dir : must end with /
*/
export const lsdir = (dir) => {
    let folders = [];
    let files	= [];
    getFoldersAndFiles(dir, folders, files);
    
    return {
        folders : folders,
        files	: files
    };
};

/**
 * ls tree
 * @param {*} dir must end with /
 * @param {*} ignores 
 * @returns 
 */
export const lstree = (dir, ignores) => {
    let fileTree = [];
    getFileTree(dir, fileTree, ignores);
    
    return fileTree;
};

/**
* mk dir
* 	dir : must end with /
*/
export const mkdir = (dir) => {
    try{
        // check dir
        var dirs = [];
        checkDir(dir, dirs);
        
        // check dirs
        if(!dirs.length) return false;
        
        // mkdir
        dirs.reverse();
        for(var i=0; i<dirs.length; i++) fs.mkdirSync(dirs[i]);
        
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
};