'use strict';

// require
var _uncompress     = require('./lib/_uncompress.js');
var _compress       = require('./lib/_compress.js');

// uncompress
module.exports.uncompress           = _uncompress.uncompress;
module.exports.uncompressSync       = _uncompress.uncompressSync;

// compress
module.exports.compressFile         = _compress.compressFile;
module.exports.compressFileSync     = _compress.compressFileSync;