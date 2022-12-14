'use strict';

var format = require('date-format');
var Debug = require('debug');
var log4js = require('log4js');

// log4js

/**
 * get logger
 * @param {*} config
 * @returns
 */
const getLogger = (config) => {
  // check
  if (!config || !config.appenders || !config.categories) {
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

// debug
const debug$2 = Debug('qiao-log');

/**
 * write local log
 * @param {*} that
 * @param {*} type
 * @param  {...any} msg
 * @returns
 */
const writeLocalLog = (that, type, ...msg) => {
  debug$2('write local log');

  // normal
  if (!that.logContentLength) {
    debug$2('write local log', 'normal');
    that.logger[type](...msg);
    return;
  }

  // check content length
  debug$2('write local log', 'content length');
  const content = [...msg].join(' ');
  const contentLength = that.logContentLength + 34;
  const finalContent = content.length > contentLength ? content.substring(0, contentLength) : content;
  that.logger[type](finalContent);
};

// debug
const debug$1 = Debug('qiao-log');

/**
 * write cache log
 * @param {*} logs
 * @param {*} that
 */
const writeCacheLog = (logs, that) => {
  debug$1('write cache log');

  Object.keys(logs).forEach((type) => {
    logs[type].forEach((msg) => {
      writeLocalLog(that, type, ...msg);
    });

    logs[type] = [];
  });
};

// format
const debug = Debug('qiao-log');

// logs
const logs = {
  debug: [],
  info: [],
  warn: [],
  error: [],
};

// interval
let intervalObj;

/**
 * qiao log
 */
var index = (options) => {
  // check
  debug('options', options);
  if (!options) {
    console.log('qiao-log', 'need options');
    return;
  }

  // logger
  const logger = getLogger(options.log4jsConfig);
  debug('get logger', !!logger);
  if (!logger) return;

  // obj
  const obj = {};
  obj.logger = logger;
  obj.intervalTime = options.intervalTime;
  obj.logContentLength = options.logContentLength;
  obj._writeLog = writeLog;
  obj.debug = (...msg) => {
    obj._writeLog('debug', ...msg);
  };
  obj.info = (...msg) => {
    obj._writeLog('info', ...msg);
  };
  obj.warn = (...msg) => {
    obj._writeLog('warn', ...msg);
  };
  obj.error = (...msg) => {
    obj._writeLog('error', ...msg);
  };

  return obj;
};

// write log
function writeLog(type, ...msg) {
  // write local log
  if (!this.intervalTime) {
    writeLocalLog(this, type, ...msg);
    return;
  }

  // tmps
  const time = format.asString('yyyy-MM-dd hh:mm:ss.SSS', new Date());
  logs[type].push([`[${time}]`, `[${type}]`, ...msg]);

  // interval
  if (intervalObj) return;
  debug('write log', 'set interval');
  intervalObj = setInterval(() => {
    writeCacheLog(logs, this);
  }, this.intervalTime);
}

module.exports = index;
