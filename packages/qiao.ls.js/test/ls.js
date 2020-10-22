'use strict';

var qls = require('../lib/qiao.ls.js');

/**
 * ls
 * 	ls('name', value, expires);
 * 	ls('name');
 * 	ls('name', null);
 */

 qls.ls('test', true, 1);
 qls.ls('test', false, 2);
 console.log(qls.ls('test'));
 qls.ls('test', null);