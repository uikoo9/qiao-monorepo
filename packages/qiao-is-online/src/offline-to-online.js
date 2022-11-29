// offline to online
import o from "offline-to-online";

// is online
import { isOnline } from "./is-online.js";

/**
 * offlineToOnline
 * @param {*} callback
 * @param {*} time
 */
export const offlineToOnline = (callback, time) => {
  o.offlineToOnline(null, isOnline, callback, time);
};
