'use strict';

var qiaoUtilEncode = require('../../lib/qiao-encode.js');

var length = 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.randomLetterAll(length));