'use strict';

// q
var q = require('../index.js');

// url
var url = 'https://baidu.com/';

// canvas
q.qrcode({
    type: 'canvas',
    id: 'canvas',
    text: url
});

// img
q.qrcode({
    type: 'img',
    id: 'img',
    text: url
});

// svg
q.qrcode({
    type: 'svg',
    id: 'svg',
    text: url
});