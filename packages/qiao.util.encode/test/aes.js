'use strict';

var qiaoUtilEncode = require('../lib/qiao.util.encode.js');

var data 	= '{"nihao":"name"}';
var key		= '12345612345612345612345612345611';
var s		= qiaoUtilEncode.AESEncrypt(data, key);
console.log(s);

var ss		= qiaoUtilEncode.AESDecrypt(s, key);
console.log(ss);

// or use iv and encoding
var data 	= '{"nihao":"name"}';
var key		= '12345612345612345612345612345611';
var iv		= '';
var encoding= 'hex';
var s		= qiaoUtilEncode.AESEncrypt(data, key, iv, encoding);
console.log(s);

var ss		= qiaoUtilEncode.AESDecrypt(s, key, iv, encoding);
console.log(ss);