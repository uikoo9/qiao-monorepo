'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
var path = require('path');

/**
 * isExists
 * 	fpath : file or folder path
 */
const isExists = (fpath) => {
    try{
        fs.accessSync(fpath);
        
        return true;
    }catch(e){
        return false;
    }
};

/**
 * get folders and files
 * @param {*} fpath 
 * @param {*} folders 
 * @param {*} files 
 */
const getFoldersAndFiles = (fpath, folders, files) => {
	fs.readdirSync(fpath).forEach(function(name){
		const stat = fs.statSync(fpath + name);
		if(stat.isDirectory()){
			folders.push({
				path : fpath,
				name : name
			});
			
			getFoldersAndFiles(fpath + name + '/', folders, files);
		}else {
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
 const getFileTree = (fpath, fileTreeChildrens, ignore) => {
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
		}else {
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
const checkDir = (dir, list) => {
	const pdir = path.dirname(dir);
	
	if(!isExists(pdir)){
		list.push(pdir);
		checkDir(pdir, list);
	}
};

/**
 * cp
 * @param {*} src file or folder src path
 * @param {*} dest file or folder dest path
 * @returns 
 */
const cp = (src, dest) => {
    try{
        const stat = fs.statSync(src);
        if(stat.isDirectory()){
            fs.cpSync(src, dest, {recursive:true});
        }else {
            fs.copyFileSync(src, dest); 
        }
    
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
 const rm = (fpath) => {
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

/**
* ls dir
* 	dir : must end with /
*/
const lsdir = (dir) => {
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
 * @param {*} ignore 
 * @returns 
 */
const lstree = (dir, ignore) => {
    let root = {};
    root.path = dir;
    root.name = '';
    root.children = [];

    getFileTree(dir, root.children, ignore);
    
    return root;
};

/**
* mk dir
* 	dir : must end with /
*/
const mkdir = (dir) => {
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

/**
 * extname
 * 	filePath : file path
 */
const extname = (filePath) => {
    if(!filePath) return null;
    
    return path.extname(filePath.toLowerCase());
};

exports.fs = fs;
exports.path = path;
exports.cp = cp;
exports.extname = extname;
exports.isExists = isExists;
exports.lsdir = lsdir;
exports.lstree = lstree;
exports.mkdir = mkdir;
exports.rm = rm;
