/**
 * stdout appender
 *  https://log4js-node.github.io/log4js-node/stdout.html
 * @returns
 */
export const stdoutAppender = () => {
  return {
    type: 'stdout',
  };
};

/**
 * data file appender
 *  https://log4js-node.github.io/log4js-node/dateFile.html
 * @param {*} fileName
 * @param {*} pattern
 * @returns
 */
export const dateFileAppender = (fileName, pattern) => {
  return {
    type: 'dateFile',
    pattern: pattern || 'yyyy-MM-dd-hh',
    filename: fileName || 'log.log',
    keepFileExt: true,
  };
};
