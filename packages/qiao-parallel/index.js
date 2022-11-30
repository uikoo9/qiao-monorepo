'use strict';

var q = require('qiao-process');

// q

// count
let count = 0;

/**
 * parallel
 * @param {*} func
 * @param {*} values
 * @param {*} callback
 * @param {*} complete
 * @param {*} jsPath
 * @returns
 */
async function parallel(func, values, callback, complete, jsPath) {
  // time
  console.time('qiao-parallel');

  // check values
  if (!values || !values.length) {
    if (complete) complete(0);
    console.timeEnd('qiao-parallel');

    return;
  }

  // run
  const valuesLength = values.length;
  for (let i = 0; i < valuesLength; i++) {
    (async (index, func, value, valuesLength) => {
      if (jsPath) {
        handlerByFork(index, jsPath, value, valuesLength, callback, complete);
      } else {
        handlerByIIFE(index, func, value, valuesLength, callback, complete);
      }
    })(i, func, values[i], valuesLength);
  }
}

// handler by IIFE
async function handlerByIIFE(index, func, value, valuesLength, callback, complete) {
  const res = await func(value);
  onCallback(callback, index, res);
  onComplete(complete, valuesLength);
}

// handler by fork
function handlerByFork(index, jsPath, value, valuesLength, callback, complete) {
  q.fork(
    jsPath,
    [value],
    function (res) {
      onCallback(callback, index, res);
    },
    function () {
      onComplete(complete, valuesLength);
    },
  );
}

// on callback
function onCallback(callback, index, res) {
  if (callback) callback(index, res);
}

// on complete
function onComplete(complete, valuesLength) {
  count++;
  if (count == valuesLength) {
    if (complete) complete(valuesLength);
    console.timeEnd('qiao-parallel');
  }
}

// parallel

/**
 * parallel by IIFE
 * @param {*} func
 * @param {*} values
 * @param {*} callback
 * @param {*} complete
 * @returns
 */
const parallelByIIFE = async function (func, values, callback, complete) {
  parallel(func, values, callback, complete);
};

/**
 * parallel by fork
 * @param {*} jsPath
 * @param {*} values
 * @param {*} callback
 * @param {*} complete
 */
const parallelByFork = async function (jsPath, values, callback, complete) {
  parallel(null, values, callback, complete, jsPath);
};

exports.parallelByFork = parallelByFork;
exports.parallelByIIFE = parallelByIIFE;
