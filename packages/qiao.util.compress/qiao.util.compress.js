'use strict';

// require
var _uncompress     = require('./lib/_uncompress.js');
var _compress       = require('./lib/_compress.js');
var zip             = require('./lib/zip.js');

// uncompress
module.exports.uncompress           = _uncompress.uncompress;
module.exports.uncompressSync       = _uncompress.uncompressSync;

// compress file
module.exports.compressFile         = _compress.compressFile;
module.exports.compressFileSync     = _compress.compressFileSync;

// compress folder
module.exports.compressFolder       = _compress.compressFolder;
module.exports.compressFolderSync   = _compress.compressFolderSync;

// zip
module.exports.zipFile      = zip.zipFile;
module.exports.zipFileSync  = zip.zipFileSync;