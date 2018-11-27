'use strict';

var qiaoUtilEncode = require('../lib/qiao.util.encode.js');

var data 	= '{"nihao":"name"}';
var key		= '123456123456123456112233';
var s		= qiaoUtilEncode.TDESEncrypt(data, key);
console.log(s);

var ss		= qiaoUtilEncode.TDESDecrypt(s, key);
console.log(ss);