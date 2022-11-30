'use strict';

var q = require('../index.js');

var data = '{"nihao":"name"}';
var s = q.md5(data);
console.log(s);

// or use encoding, hex or base64
var ss = q.md5(data, 'hex');
console.log(ss);
