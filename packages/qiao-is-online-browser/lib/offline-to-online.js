'use strict';

// offline to online
var o = require('offline-to-online');

// is online
var isOnline = require('./is-online.js');

// exports
module.exports = offlineToOnline;

/**
 * offline to online
 *  src, is online img src
 *  callback
 *  time
 */
function offlineToOnline(src, callback, time){
    o.offlineToOnlineWithSrc(src, isOnline, callback, time);
}