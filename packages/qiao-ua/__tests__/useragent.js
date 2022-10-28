'use strict';

var ua = require('../index.js');

var useragent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36';
var res = ua(useragent);
console.log(res);