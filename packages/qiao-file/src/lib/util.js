'use strict';

// fs
import fs from 'fs';

// path
import path from 'path';

// is exists
import { isExists } from './is.js';

/**
 * get folders and files
 * @param {*} fpath 
 * @param {*} folders 
 * @param {*} files 
 */
export const getFoldersAndFiles = (fpath, folders, files) => {
	fs.readdirSync(fpath).forEach(function(name){
		const stat = fs.statSync(fpath + name);
		if(stat.isDirectory()){
			folders.push({
				path : fpath,
				name : name
			});
			
			getFoldersAndFiles(fpath + name + '/', folders, files);
		}else{
			files.push({
				path : fpath,
				name : name
			});
		}
	});
};

/**
 * check dir
 * @param {*} dir 
 * @param {*} list 
 */
export const checkDir = (dir, list) => {
	const pdir = path.dirname(dir);
	
	if(!isExists(pdir)){
		list.push(pdir);
		checkDir(pdir, list);
	}
};