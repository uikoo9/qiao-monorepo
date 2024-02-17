const { offlineToOnline } = require('../index.js');

// callback
// time, interval time, default is 3*1000ms
offlineToOnline(
  'http://www.baidu.com/img/flexible/logo/pc/result.png',
  () => {
    console.log('offline-to-online');
  },
  3 * 1000,
);
