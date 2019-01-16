'use strict';

var qiaoUtilEncode = require('../lib/qiao.util.encode.js');

var data 	= '{"nihao":"name"}';
var key		= '123456123456123456112233';
var s		= qiaoUtilEncode.TDESEncrypt(data, key);
console.log(s);

var ss		= qiaoUtilEncode.TDESDecrypt(s, key);
console.log(ss);

// or use iv and encoding
var data 	= '{"nihao":"name"}';
var key		= '123456123456123456112233';
var iv		= '';
var encoding= 'hex';
var s		= qiaoUtilEncode.TDESEncrypt(data, key, iv, encoding);
console.log(s);

var ss		= qiaoUtilEncode.TDESDecrypt(s, key, iv, encoding);
console.log(ss);