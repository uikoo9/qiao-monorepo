'use strict';

var qiaoUtilEncode = require('../lib/qiao.util.encode.js');

var data 	= '{"nihao":"name"}';
var s		= qiaoUtilEncode.md5(data);
console.log(s);

// or use encoding, hex or base64
var ss		= qiaoUtilEncode.md5(data, 'hex');
console.log(ss);