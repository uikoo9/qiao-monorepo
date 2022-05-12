'use strict';

// q
var q = require('../index.js');

// is online img src
var isOnlineImgSrc = 'http://www.baidu.com/img/flexible/logo/pc/result.png';

// callback
// time, interval time, default is 3*1000ms
q.offlineToOnline(isOnlineImgSrc, function(){
    console.log('offline-to-online');
}, 3 * 1000);