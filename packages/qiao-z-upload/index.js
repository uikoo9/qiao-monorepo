'use strict';

var formidable = require('formidable');

// formidable

/**
 * handle
 * @param {*} req 
 * @param {*} opt 
 */
const handle = (req, opt) => {
    // form
    const form = new formidable.IncomingForm();

    // default options
    const defaultOptions = {
        encoding: 'utf-8',
        allowEmptyFiles: false,
        keepExtensions: true,
        maxFileSize: 200 * 1024 * 1024,
        maxFields: 1000,
        maxFieldsSize: 20 * 1024 * 1024,
        hashAlgorithm: false,
        multiples: false,
    };

    // options
    const options = Object.assign({}, defaultOptions, opt);

    // parse
    form.parse(req, function (err, fields, files) {
        if (options && options.handleParse) options.handleParse(err, fields, files);
    });

    // events
    form.on('progress', function (bytesReceived, bytesExpected) {
        if (options && options.handleProgress) options.handleProgress(bytesReceived, bytesExpected);
    });
    form.on('field', function (name, value) {
        if (options && options.handleField) options.handleField(name, value);
    });
    form.on('fileBegin', function (name, file) {
        if (options && options.handleFileBegin) options.handleFileBegin(name, file);
    });
    form.on('file', function (name, file) {
        if (options && options.handleFile) options.handleFile(name, file);
    });
    form.on('error', function (err) {
        if (options && options.handleError) options.handleError(err);
    });
    form.on('aborted', function () {
        if (options && options.handleAborted) options.handleAborted();
    });
    form.on('end', function () {
        if (options && options.handleEnd) options.handleEnd();
    });
};

// handle

/**
 * upload
 */
const upload = handle;

/**
 * upload sync
 * @param {*} req 
 * @returns 
 */
const uploadSync = (req) => {
    return new Promise((resolve, reject) => {
        handle(req, {
            handleParse: (err, fields, files) => {
                if (err) {
                    reject(err);
                    return;
                }

                return resolve({ fields: fields, files: files });
            }
        });
    });
};

exports.upload = upload;
exports.uploadSync = uploadSync;
