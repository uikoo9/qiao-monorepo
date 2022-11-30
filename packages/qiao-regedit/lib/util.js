'use strict';

// iconv
var iconv = require('iconv-lite');

// encoding
var encoding = 'cp936';

/**
 * binary encoding
 */
exports.binaryEncoding = 'binary';

/**
 * decode
 */
exports.decode = function (s) {
  return iconv.decode(Buffer.from(s, exports.binaryEncoding), encoding);
};

/**
 * msg
 */
exports.msg = function (err, stdout, stderr) {
  return err ? exports.decode(stderr) : exports.decode(stdout);
};
