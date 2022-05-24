"use strict";

// offline to online
import o from "offline-to-online";

// is online
import { isOnline } from "./is-online.js";
/**
 * 
 * @param {string} src img src 
 * @param {function} callback callback function
 * @param {number} time interval time(ms), default is 3*1000ms
 * @example
'use strict';

var q = require('qiao-is-online-browser');

// is online img src
var isOnlineImgSrc = 'your online img src';

// callback
// time, interval time, default is 3*1000ms
q.offlineToOnline(isOnlineImgSrc, function(){
    console.log('offline-to-online');
}, 3 * 1000);
 */
export const offlineToOnline = (src, callback, time) => {
  o.offlineToOnlineWithSrc(src, isOnline, callback, time);
};
