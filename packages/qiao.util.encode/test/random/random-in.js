'use strict';

var qiaoUtilEncode = require('../../lib/qiao.util.encode.js');

var min = 0;
var max = 9;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.randomIn(min, max));