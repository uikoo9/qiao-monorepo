'use strict';

// require
var _compress       = require('./lib/_compress.js');
var _uncompress     = require('./lib/_uncompress.js');
var zip             = require('./lib/zip.js');

// compress file
module.exports.compressFile         = _compress.compressFile;
module.exports.compressFileSync     = _compress.compressFileSync;

// compress folder
module.exports.compressFolder       = _compress.compressFolder;
module.exports.compressFolderSync   = _compress.compressFolderSync;

// uncompress
module.exports.uncompress           = _uncompress.uncompress;
module.exports.uncompressSync       = _uncompress.uncompressSync;

// zip
module.exports.zipFile          = zip.zipFile;
module.exports.zipFileSync      = zip.zipFileSync;
module.exports.zipFolder        = zip.zipFolder;
module.exports.zipFolderSync    = zip.zipFolderSync;