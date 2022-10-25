'use strict';

var q = require('../index.js');

q.offlineToOnline(function () {
    console.log('offline-to-online');
}, 3 * 1000);