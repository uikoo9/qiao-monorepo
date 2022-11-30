'use strict';

var q = require('../index.js');

var data = '{"nihao":"name"}';
var key = '123456123456123456112233';
var s = q.TDESEncrypt(data, key);
console.log(s);

var ss = q.TDESDecrypt(s, key);
console.log(ss);

// or use iv and encoding(hex, base64)
var iv = '';
var encoding = 'hex';
var s1 = q.TDESEncrypt(data, key, iv, encoding);
console.log(s1);

var ss1 = q.TDESDecrypt(s1, key, iv, encoding);
console.log(ss1);
