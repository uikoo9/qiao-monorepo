'use strict';

var qiaoUtilEncode = require('../../lib/qiao.util.encode.js');

var length = 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.randomLetterNumber(length));