'use strict';

var qls = require('../lib/qiao.ls.js');

/**
 * cache
 *  cache('name', null);
 *  cache('name', 'key', null);
 *  cache('name', 'key');
 *  cache('name', 'key', value, exp);
 */
qls.cache('cache.group.role', 'team-123', false);
qls.cache('cache.group.role', 'team-123', true);
console.log(qls.cache('cache.group.role', 'team-123'));
qls.cache('cache.group.role', 'team-123', null);
qls.cache('cache.group.role', null);