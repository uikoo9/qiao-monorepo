'use strict';

// fs
import fs from 'fs';

// util
import { getFoldersAndFiles } from './util.js';

/**
 * cp
 * @param {*} src file or folder src path
 * @param {*} dest file or folder dest path
 * @returns 
 */
export const cp = (src, dest) => {
    try{
        const stat = fs.statSync(src);
        if(stat.isDirectory()){
            fs.cpSync(src, dest, {recursive:true});
        }else{
            fs.copyFileSync(src, dest); 
        }
    
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
};

/**
 * mv
 * @param {*} oldPath 
 * @param {*} newPath 
 */
export const mv = (oldPath, newPath) => {
    try{
        fs.renameSync(oldPath, newPath);

		return true;
    }catch(e){
        console.log(e);
		return false;
    }
};

/**
 * rm
 * 	fpath, file or folder path, folder must end with /
 */
export const rm = (fpath) => {
	try{
		// rm file
		const pathStat = fs.statSync(fpath);
		if(!pathStat.isDirectory()){
			fs.unlinkSync(fpath);
			
			return true;
		}
		
		// ls dir
		let folders = [];
		let files 	= [];
		getFoldersAndFiles(fpath, folders, files);
		folders.reverse();
		
		// rm folder
		for(let i=0; i<files.length; i++) fs.unlinkSync(files[i].path + files[i].name);
		for(let i=0; i<folders.length; i++) fs.rmdirSync(folders[i].path + folders[i].name);
		fs.rmdirSync(fpath);
		
		// return
		return true;
	}catch(e){
		console.log(e);
		return false;
	}
};