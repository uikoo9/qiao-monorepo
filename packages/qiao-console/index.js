'use strict';

/**
 * clear
 */
const clear = () => {
  process.stdout.cursorTo(0, 0);
  process.stdout.clearScreenDown();
};

/**
 * clear line
 */
const clearLine = () => {
  process.stdout.clearLine();
};

/**
 * move to
 * @param {*} x
 * @param {*} y
 */
const moveTo = (x, y) => {
  process.stdout.cursorTo(x, y);
};

/**
 * write
 * @param {*} msg
 */
const write = (msg) => {
  process.stdout.write(msg);
};

/**
 * write line x y
 * @param {*} x
 * @param {*} y
 * @param {*} msg
 */
const writeLineXY = (x, y, msg) => {
  process.stdout.cursorTo(x, y);
  process.stdout.clearLine();
  process.stdout.write(msg);
  process.stdout.write('\n');
};

/**
 * write line
 * @param {*} y
 * @param {*} msg
 */
const writeLine = (y, msg) => {
  process.stdout.cursorTo(0, y);
  process.stdout.clearLine();
  process.stdout.write(msg);
  process.stdout.write('\n');
};

exports.clear = clear;
exports.clearLine = clearLine;
exports.moveTo = moveTo;
exports.write = write;
exports.writeLine = writeLine;
exports.writeLineXY = writeLineXY;
