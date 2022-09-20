'use strict';

var formidable 	= require('formidable');

/**
 * handle
 * 	req, request
 * 	options
 */
exports.handle = function(req, options){
	var form = new formidable.IncomingForm();
	
//	form.type
//	form.bytesReceived
//	form.bytesExpected
	form.encoding 		= options && options.hasOwnProperty('encoding') 		? options.encoding 			: 'utf-8';
	form.uploadDir 		= options && options.hasOwnProperty('uploadDir') 		? options.uploadDir 		: form.uploadDir;
	form.keepExtensions	= options && options.hasOwnProperty('keepExtensions')	? options.keepExtensions	: true;
	form.maxFieldsSize 	= options && options.hasOwnProperty('maxFieldsSize') 	? options.maxFieldsSize 	: 20 * 1024 * 1024;
	form.maxFileSize 	= options && options.hasOwnProperty('maxFileSize') 		? options.maxFileSize 		: 200 * 1024 * 1024;
	form.maxFields 		= options && options.hasOwnProperty('maxFields') 		? options.maxFields 		: 1000;
	form.hash 			= options && options.hasOwnProperty('hash') 			? options.hash 				: false;
	form.multiples 		= options && options.hasOwnProperty('multiples') 		? options.multiples 		: false;
	form.parse(req, function(err, fields, files){
		if(options && options.handleParse) options.handleParse(err, fields, files);
	});
	
	form.on('progress', function(bytesReceived, bytesExpected){
		if(options && options.handleProgress) options.handleProgress(bytesReceived, bytesExpected);
	});
	form.on('field', function(name, value){
		if(options && options.handleField) options.handleField(name, value);
	});
	form.on('fileBegin', function(name, file){
		if(options && options.handleFileBegin) options.handleFileBegin(name, file);
	});
	form.on('file', function(name, file){
		if(options && options.handleFile) options.handleFile(name, file);
	});
	form.on('error', function(err){
		if(options && options.handleError) options.handleError(err);
	});
	form.on('aborted', function(){
		if(options && options.handleAborted) options.handleAborted();
	});
	form.on('end', function(){
		if(options && options.handleEnd) options.handleEnd();
	});
};

/**
 * handle sync
 * 	req, request
 */
exports.handleSync = function(req){
	return new Promise(function(resolve, reject){
		exports.handle(req, {
			handleParse : function(err, fields, files){
				if(err){
					reject(err);
					return;
				}
				
				return resolve({fields:fields, files:files});
			}
		});
	});
};