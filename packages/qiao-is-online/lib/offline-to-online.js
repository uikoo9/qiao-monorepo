'use strict';

// offline to online
var o = require('offline-to-online');

// is online
var isOnline = require('./is-online.js');

// exports
module.exports = offlineToOnline;

/**
 * @param {function} callback callback function
 * @param {number} time interval time(ms), default is 3*1000ms
 * @example
'use strict';

var q = require('qiao-is-online');

// callback
// time, interval time, default is 3*1000ms
q.offlineToOnline(function(){
    console.log('offline-to-online');
}, 3 * 1000);
 */
function offlineToOnline(callback, time){
    o.offlineToOnline(null, isOnline, callback, time);
};