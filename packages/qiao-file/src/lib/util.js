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
 * get file tree
 * @param {*} fpath 
 * @param {*} fileTree 
 */
 export const getFileTree = (fpath, fileTreeChildrens, ignore) => {
	fs.readdirSync(fpath).forEach(function(name){
		const rpath = fpath + name;
		if(rpath.indexOf(ignore) > -1) return;

		const stat = fs.statSync(rpath);
		if(stat.isDirectory()){
			let info = {};
			info.path = rpath + '/';
			info.name = '';
			info.children = [];
			
			fileTreeChildrens.push(info);
			
			getFileTree(info.path, info.children);
		}else{
			let info = {};
			info.path = fpath;
			info.name = name;

			fileTreeChildrens.push(info);
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