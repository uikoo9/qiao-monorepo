'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
var path = require('path');
var readline = require('readline');

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
 * @param {*} ignores 
 */
const getFileTree = (fpath, fileTree, ignores) => {
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
		}else {
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
const checkDir = (dir, list) => {
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
 * mv
 * @param {*} oldPath 
 * @param {*} newPath 
 */
const mv = (oldPath, newPath) => {
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
 * @param {*} ignores 
 * @returns 
 */
const lstree = (dir, ignores) => {
    let fileTree = [];
    getFileTree(dir, fileTree, ignores);
    
    return fileTree;
};

/**
* mk dir
* 	dir : must end with /
*/
const mkdir = (dir) => {
    try{
        // check
        if(!dir || !dir.endsWith('/')) return false;

        // is exists
        if(isExists(dir)) return true;
        
        // check dir
        var dirs = [dir];
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
    if (!filePath) return null;

    return path.extname(filePath.toLowerCase());
};

/**
 * readFile
 * @param {*} filePath 
 * @param {*} options https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsreadfilesyncpath-options
 */
const readFile = (filePath, options) => {
    // check
    if (!filePath) return;

    try {
        // opt
        const opt = { encoding: 'utf8' };
        options = options || opt;

        return fs.readFileSync(filePath, options);
    } catch (e) {
        console.log(e);
        return;
    }
};

/**
 * readFileLineByLine
 * @param {*} filePath 
 * @param {*} onLine 
 * @param {*} onClose 
 */
const readFileLineByLine = (filePath, onLine, onClose) => {
    // rl
    const rl = readline.createInterface({
        input: fs.createReadStream(filePath, { encoding: 'utf8' })
    });

    // on
    rl.on('line', function (line) {
        if (onLine) onLine(line);
    });
    rl.on('close', function () {
        if (onClose) onClose();
    });
};

/**
 * readFileLineByLineSync
 * @param {*} filePath 
 * @returns 
 */
const readFileLineByLineSync = (filePath) => {
    return new Promise((resolve, reject) => {
        // lines
        let lines = [];

        readFileLineByLine(filePath, line => {
            lines.push(line);
        }, () => {
            resolve(lines);
            lines = null;
        });
    });
};

/**
 * writeFile
 * @param {*} filePath 
 * @param {*} fileData 
 * @param {*} options https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilesyncfile-data-options
 */
const writeFile = (filePath, fileData, options) => {
    // check
    if (!filePath) return;

    try {
        // vars
        fileData = fileData || '';
        options = options || {};
        fs.writeFileSync(filePath, fileData, options);

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

/**
 * writeFileFromLines
 * @param {*} filePath 
 * @param {*} lines 
 */
const writeFileFromLines = (filePath, lines) => {
    const f = fs.createWriteStream(filePath, {
        flags: 'a'
    });

    for (let i = 0; i < lines.length; i++) {
        f.write(`${lines[i]}\r\n`);
    }

    f.close();
};

exports.fs = fs;
exports.path = path;
exports.cp = cp;
exports.extname = extname;
exports.isExists = isExists;
exports.lsdir = lsdir;
exports.lstree = lstree;
exports.mkdir = mkdir;
exports.mv = mv;
exports.readFile = readFile;
exports.readFileLineByLine = readFileLineByLine;
exports.readFileLineByLineSync = readFileLineByLineSync;
exports.rm = rm;
exports.writeFile = writeFile;
exports.writeFileFromLines = writeFileFromLines;
