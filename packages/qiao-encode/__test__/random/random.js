'use strict';

var q = require('../../index.js');

// random number
var type	= 0;
var length	= 4;
for(var i=0; i<10; i++) console.log(q.random(type, length));

// random lower letter
var type	= 1;
var length	= 4;
for(var i=0; i<10; i++) console.log(q.random(type, length));

// random upper letter
var type	= 2;
var length	= 4;
for(var i=0; i<10; i++) console.log(q.random(type, length));

// random all letter
var type	= 3;
var length	= 4;
for(var i=0; i<10; i++) console.log(q.random(type, length));

// random all letter and number
var type	= 4;
var length	= 4;
for(var i=0; i<10; i++) console.log(q.random(type, length));