'use strict';

// require
var _compress       = require('./lib/_compress.js');
var _uncompress     = require('./lib/_uncompress.js');
var zip             = require('./lib/zip.js');
var gzip            = require('./lib/gzip.js');

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
module.exports.unzip            = zip.unzip;
module.exports.unzipSync        = zip.unzipSync;

// gzip
module.exports.gzipFile          = gzip.gzipFile;
module.exports.gzipFileSync      = gzip.gzipFileSync;
module.exports.ungzip            = gzip.ungzip;
module.exports.ungzipSync        = gzip.ungzipSync;