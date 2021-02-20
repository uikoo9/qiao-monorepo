'use strict';

// offline to online
var o = require('offline-to-online');

// is online
var isOnline = require('./is-online.js');

// exports
module.exports = offlineToOnline;

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
function offlineToOnline(src, callback, time){
    o.offlineToOnlineWithSrc(src, isOnline, callback, time);
}