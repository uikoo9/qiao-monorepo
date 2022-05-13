'use strict';

var req 		= require('./req.js');
var download	= require('./download.js');
var imgToBase64	= require('./img-to-base64.js');

/**
 * req
 */
exports.request 	= req.request;
exports.get 		= req.get;
exports.getSync 	= req.getSync;
exports.post 		= req.post;
exports.postSync 	= req.postSync;
exports.put 		= req.put;
exports.putSync 	= req.putSync;
exports.patch 		= req.patch;
exports.patchSync 	= req.patchSync;
exports.delete 		= req.delete;
exports.deleteSync 	= req.deleteSync;
exports.head 		= req.head;
exports.headSync 	= req.headSync;
exports.options 	= req.options;
exports.optionsSync	= req.optionsSync;

/**
 * download
 */
exports.download = download.download;

/**
 * img to base64
 */
exports.imgToBase64 	= imgToBase64.imgToBase64;
exports.imgToBase64Sync	= imgToBase64.imgToBase64Sync;