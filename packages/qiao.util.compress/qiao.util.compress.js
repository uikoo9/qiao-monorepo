'use strict';

// require
var _compress       = require('./lib/_compress.js');
var _uncompress     = require('./lib/_uncompress.js');

// compress
module.exports.compressFile         = _compress.compressFile;
module.exports.compressFileSync     = _compress.compressFileSync;

// uncompress
module.exports.uncompress           = _uncompress.uncompress;
module.exports.uncompressSync       = _uncompress.uncompressSync;