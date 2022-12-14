// format
import format from 'date-format';

// debug
import Debug from 'debug';
const debug = Debug('qiao-log');

// logger
import { getLogger } from './get-logger.js';

// log
import { writeLocalLog } from './write-local-log.js';
import { writeCacheLog } from './write-cache-log.js';

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
export default (options) => {
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
