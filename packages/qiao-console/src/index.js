/**
 * clear
 */
export const clear = () => {
  process.stdout.cursorTo(0, 0);
  process.stdout.clearScreenDown();
};

/**
 * clear line
 */
export const clearLine = () => {
  process.stdout.clearLine();
};

/**
 * move to
 * @param {*} x
 * @param {*} y
 */
export const moveTo = (x, y) => {
  process.stdout.cursorTo(x, y);
};

/**
 * write
 * @param {*} msg
 */
export const write = (msg) => {
  process.stdout.write(msg);
};

/**
 * write line x y
 * @param {*} x
 * @param {*} y
 * @param {*} msg
 */
export const writeLineXY = (x, y, msg) => {
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
export const writeLine = (y, msg) => {
  process.stdout.cursorTo(0, y);
  process.stdout.clearLine();
  process.stdout.write(msg);
  process.stdout.write('\n');
};
