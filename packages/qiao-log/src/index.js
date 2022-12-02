// log4js
import log4js from 'log4js';

// config
import { getConfig } from './config.js';

/**
 * get logger
 * @param {*} options
 * @returns
 */
export const getLogger = (options) => {
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
export const close = (cb) => {
  log4js.shutdown(() => {
    if (cb) cb();
  });
};
