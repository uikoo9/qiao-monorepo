'use strict';

var q = require('../index.js');

var data = '{"nihao":"name"}';
var key = '12345612345612345612345612345611';
var s = q.AESEncrypt(data, key);
console.log(s);

var ss = q.AESDecrypt(s, key);
console.log(ss);

// or use iv and encoding(hex, base64)
var iv = '';
var encoding = 'hex';
var s1 = q.AESEncrypt(data, key, iv, encoding);
console.log(s1);

var ss1 = q.AESDecrypt(s1, key, iv, encoding);
console.log(ss1);
