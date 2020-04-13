'use strict';

var qls = require('../lib/qiao.ls.js');

qls.setCache('cache.group.role', 'team-123', false);
qls.setCache('cache.group.role', 'team-123', true);
console.log(qls.getCache('cache.group.role', 'team-123'));