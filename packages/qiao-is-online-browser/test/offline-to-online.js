'use strict';

var q = require('../lib/qiao-is-online-browser');

// callback
// time, interval time, default is 3*1000ms
q.offlineToOnline(function(){
    console.log('offline-to-online');
}, 3 * 1000);