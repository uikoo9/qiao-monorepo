'use strict';

var q = require('../lib/qiao-is-online-browser');

// is online img src
var isOnlineImgSrc = require('../lib/config.json').img;

// callback
// time, interval time, default is 3*1000ms
q.offlineToOnline(isOnlineImgSrc, function(){
    console.log('offline-to-online');
}, 3 * 1000);