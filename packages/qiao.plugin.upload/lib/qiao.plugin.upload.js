'use strict';

var multer 	= require('multer');
var qiao	= {};
qiao.file	= require('qiao.util.file');
qiao.encode	= require('qiao.util.encode');

/**
 * gen
 * 	dir
 * 	filename
 */
exports.gen = function(dir, filename){
	var storage = multer.diskStorage({
		destination : function(req, file, cb) {
			cb(null, dir);
		},
		filename : function(req, file, cb) {
			cb(null, filename);
		}
	});

	return multer({storage : storage});
};

/**
 * genWithExt
 * 	dir
 */
exports.genWithExt = function(dir){
	var storage = multer.diskStorage({
		destination : function(req, file, cb) {
			cb(null, dir);
		},
		filename : function(req, file, cb) {
			cb(null, qiao.encode.uuid() + qiao.file.extname(file.originalname));
		}
	});
	
	return multer({storage : storage});
};

/**
 * genWithName
 * 	dir
 */
exports.genWithName = function(dir){
	var storage = multer.diskStorage({
		destination : function(req, file, cb) {
			cb(null, dir);
		},
		filename : function(req, file, cb) {
			cb(null, qiao.encode.uuid() + '-' + file.originalname);
		}
	});
	
	return multer({storage : storage});
};