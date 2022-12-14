// debug
import Debug from 'debug';
const debug = Debug('qiao-log');

/**
 * write local log
 * @param {*} that
 * @param {*} type
 * @param  {...any} msg
 * @returns
 */
export const writeLocalLog = (that, type, ...msg) => {
  debug('write local log');

  // normal
  if (!that.logContentLength) {
    debug('write local log', 'normal');
    that.logger[type](...msg);
    return;
  }

  // check content length
  debug('write local log', 'content length');
  const content = [...msg].join(' ');
  const contentLength = that.logContentLength + 34;
  const finalContent = content.length > contentLength ? content.substring(0, contentLength) : content;
  that.logger[type](finalContent);
};
