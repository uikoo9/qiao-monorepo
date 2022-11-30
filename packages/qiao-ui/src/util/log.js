/**
 * normalLog
 * @param {*} msg
 * @param {*} color
 */
const normalLog = (msg, color) => {
  console.log(`%c${msg}`, color);
};

/**
 * colorLog
 * @param {*} msg
 */
export const colorLog = (msg) => {
  normalLog(msg, 'color: blue');
};
