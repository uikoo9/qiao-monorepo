'use strict';

/**
 * datefile appender
 *  https://log4js-node.github.io/log4js-node/dateFile.html
 * @param {*} filename
 * @param {*} pattern
 * @returns
 */
module.exports = function (filename, pattern) {
  return {
    type: 'dateFile',
    pattern: pattern || 'yyyy-MM-dd-hh',
    filename: filename || 'log.log',
    keepFileExt: true,
  };
};
