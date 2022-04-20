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
 * @param {*} ignores 
 */
export const getFileTree = (fpath, fileTree, ignores) => {
	fs.readdirSync(fpath).forEach(function(name){
		const rpath = fpath + name;
		if(isFileTreeIgnore(rpath, ignores)) return;

		const stat = fs.statSync(rpath);
		if(stat.isDirectory()){
			let info = {};
			info.path = fpath;
			info.name = name;
			info.children = [];
			
			fileTree.push(info);
			
			getFileTree(rpath + '/', info.children, ignores);
		}else{
			let info = {};
			info.path = fpath;
			info.name = name;

			fileTree.push(info);
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

// is file tree ignore
const isFileTreeIgnore = (rpath, ignores) => {
	if(!rpath || !ignores || !ignores.length) return;

	let ignore = false;
	for(let i=0; i<ignores.length; i++){
		if(rpath.indexOf(ignores[i]) > -1) ignore = true;
	}

	return ignore;
};