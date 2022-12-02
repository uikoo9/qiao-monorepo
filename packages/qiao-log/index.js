'use strict';

var log4js = require('log4js');

/**
 * stdout appender
 *  https://log4js-node.github.io/log4js-node/stdout.html
 * @returns
 */
const stdoutAppender = () => {
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
const dateFileAppender = (fileName, pattern) => {
  return {
    type: 'dateFile',
    pattern: pattern || 'yyyy-MM-dd-hh',
    filename: fileName || 'log.log',
    keepFileExt: true,
  };
};

// appenders

/**
 * get config
 * @param {*} options
 * @returns
 */
const getConfig = (options) => {
  // opt
  const opt = options || {};

  // appenders
  const finalAppenders = opt.appenders || ['stdoutLog'];

  // level
  const finaleLevel = opt.level || 'debug';

  // config
  const config = {
    appenders: {
      stdoutLog: stdoutAppender(),
      datefileLog: dateFileAppender(opt.fileName, opt.pattern),
    },
    categories: {
      default: {
        level: finaleLevel,
        appenders: finalAppenders,
      },
    },
  };

  return config;
};

// log4js

/**
 * get logger
 * @param {*} options
 * @returns
 */
const getLogger = (options) => {
  // config
  const config = getConfig(options);
  log4js.configure(config);

  // logger
  return log4js.getLogger();
};

/**
 * close
 * @param {*} cb
 */
const close = (cb) => {
  log4js.shutdown(() => {
    if (cb) cb();
  });
};

exports.close = close;
exports.getLogger = getLogger;
