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
  if (!options) return;

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
  obj._writeLocalLog = writeLocalLog;
  obj._writeCacheLog = writeCacheLog;
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
    this._writeLocalLog(type, ...msg);
    return;
  }

  // tmps
  const time = format.asString('yyyy-MM-dd hh:mm:ss.SSS', new Date());
  logs[type].push([`[${time}]`, `[${type}]`, ...msg]);

  // interval
  if (intervalObj) return;
  debug('write log', 'set interval');
  intervalObj = setInterval(() => {
    this._writeCacheLog();
  }, this.intervalTime);
}

// write local log
function writeLocalLog(type, ...msg) {
  debug('write local log');

  // normal
  if (!this.logContentLength) {
    debug('write local log', 'normal');
    this.logger[type](...msg);
    return;
  }

  // check content length
  debug('write local log', 'content length');
  const content = msg.join(' ');
  const contentLength = this.logContentLength + 34;
  const finalContent = content.length > contentLength ? content.substring(0, contentLength) : content;
  this.logger[type](finalContent);
}

// write cache log
function writeCacheLog() {
  debug('write cache log');

  Object.keys(logs).forEach((type) => {
    logs[type].forEach((msg) => {
      this._writeLocalLog(type, ...msg);
    });

    if (logs[type].length) logs[type] = [];
  });
}

module.exports = index;
