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
exports.mkdir = mkdir;
exports.rm = rm;
