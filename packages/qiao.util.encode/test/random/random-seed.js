'use strict';

var qiaoUtilEncode = require('../../lib/qiao.util.encode.js');

var seed	= '0123456789';
var length 	= 4;
for(var i=0; i<10; i++) console.log(qiaoUtilEncode.randomSeed(seed, length));