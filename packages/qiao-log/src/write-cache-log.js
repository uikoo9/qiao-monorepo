// debug
import Debug from 'debug';
const debug = Debug('qiao-log');

// log
import { writeLocalLog } from './write-local-log.js';

/**
 * write cache log
 * @param {*} logs
 * @param {*} that
 */
export const writeCacheLog = (logs, that) => {
  debug('write cache log');

  Object.keys(logs).forEach((type) => {
    logs[type].forEach((msg) => {
      writeLocalLog(that, type, ...msg);
    });

    logs[type] = [];
  });
};
