'use strict';

var qiaoUtilEncode = require('../lib/qiao.util.encode');

var data 	= '{"nihao":"name"}';
var key		= '12345612345612345612345612345611';
var s		= qiaoUtilEncode.AESEncrypt(data, key);
console.log(s);

var ss		= qiaoUtilEncode.AESDecrypt(s, key);
console.log(ss);