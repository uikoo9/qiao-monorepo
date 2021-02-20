'use strict';

// offline to online
var offlineToOnline = require('../lib/offline-to-online.js');

// is online img src
var isOnlineImgSrc = require('../lib/config.json').img;

// callback
// time, interval time, default is 3*1000ms
offlineToOnline(isOnlineImgSrc, function(){
    console.log('offline-to-online');
}, 3 * 1000);