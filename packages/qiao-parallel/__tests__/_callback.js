'use strict';

// q
var q = require('qiao-console');

/**
 * callback
 * @param {*} index
 * @param {*} res
 */
module.exports = function (index, res) {
  q.writeLine(index, `${index} ${res}`);
};
