// appenders
import { stdoutAppender, dateFileAppender } from './appender.js';

/**
 * get config
 * @param {*} options
 * @returns
 */
export const getConfig = (options) => {
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
