'use strict';

/**
 * handler
 * @param {*} timeout
 * @returns
 */
module.exports = function (timeout) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      return resolve(timeout);
    }, timeout);
  });
};
