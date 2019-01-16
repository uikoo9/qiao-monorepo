'use strict';

var qiaoUtilEncode = require('../lib/qiao.util.encode.js');

var data 	= '{"nihao":"name"}';
var key		= '123456123456123456112233';
var s		= qiaoUtilEncode.TDESEncrypt(data, key);
console.log(s);

var ss		= qiaoUtilEncode.TDESDecrypt(s, key);
console.log(ss);

// or use iv and encoding(hex, base64)
var iv		= '';
var encoding= 'hex';
var s1		= qiaoUtilEncode.TDESEncrypt(data, key, iv, encoding);
console.log(s1);

var ss1		= qiaoUtilEncode.TDESDecrypt(s1, key, iv, encoding);
console.log(ss1);