// offline to online
import o from 'offline-to-online';

// is online
import { isOnline } from './is-online.js';

/**
 * offlineToOnline
 * @param {*} src
 * @param {*} callback
 * @param {*} time
 */
export const offlineToOnline = (src, callback, time) => {
  o.offlineToOnlineWithSrc(src, isOnline, callback, time);
};
