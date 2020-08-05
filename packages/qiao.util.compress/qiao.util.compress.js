'use strict';

// require
var _compress       = require('./lib/_compress.js');
var _uncompress     = require('./lib/_uncompress.js');
var zip             = require('./lib/zip.js');
var gzip            = require('./lib/gzip.js');
var tar             = require('./lib/tar.js');
var tgz             = require('./lib/tgz.js');

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

// tar
module.exports.tarFile          = tar.tarFile;
module.exports.tarFileSync      = tar.tarFileSync;
module.exports.tarFolder        = tar.tarFolder;
module.exports.tarFolderSync    = tar.tarFolderSync;
module.exports.untar            = tar.untar;
module.exports.untarSync        = tar.untarSync;

// tgz
module.exports.tgzFile          = tgz.tgzFile;
module.exports.tgzFileSync      = tgz.tgzFileSync;
module.exports.tgzFolder        = tgz.tgzFolder;
module.exports.tgzFolderSync    = tgz.tgzFolderSync;
module.exports.untgz            = tgz.untgz;
module.exports.untgzSync        = tgz.untgzSync;