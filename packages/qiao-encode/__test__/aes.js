'use strict';

var qiaoUtilEncode = require('../lib/qiao-encode.js');

var data 	= '{"nihao":"name"}';
var key		= '12345612345612345612345612345611';
var s		= qiaoUtilEncode.AESEncrypt(data, key);
console.log(s);

var ss		= qiaoUtilEncode.AESDecrypt(s, key);
console.log(ss);

// or use iv and encoding(hex, base64)
var iv		= '';
var encoding= 'hex';
var s1		= qiaoUtilEncode.AESEncrypt(data, key, iv, encoding);
console.log(s1);

var ss1		= qiaoUtilEncode.AESDecrypt(s1, key, iv, encoding);
console.log(ss1);