// log4js
import log4js from 'log4js';

/**
 * get logger
 * @param {*} config 
 * @returns 
 */
export const getLogger = (config) => {
  // check
  if(!config || !config.appenders || !config.categories){
    console.log('qiao-log', 'need options.log4jsConfig');
    return;
  }

  // layout
  Object.keys(config.appenders).forEach((appender) => {
    config.appenders[appender].layout = { type: 'messagePassThrough' };
  });

  // config
  log4js.configure(config);

  // return
  return log4js.getLogger();
};
