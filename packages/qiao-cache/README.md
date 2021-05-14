# qiao-cache
[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]
nodejs memory cache

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

## api
### cache
```javascript
'use strict';

var q = require('qiao-cache');

// set
q.cache('test', 'hello');

// get
var s = q.cache('test');
console.log(s); // hello

// del
q.cache('test', null);
console.log(q.cache('test')); // undefined
```

## version
### 0.0.1.20201106
1. init project
