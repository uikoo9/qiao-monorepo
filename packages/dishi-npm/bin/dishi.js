#!/usr/bin/env node

'use strict';

// qiao
var qiao = require('../src/util/qiao.js');

// cmd
require('./dishi-version');
require('./dishi-ucenter');
require('./dishi-group');
require('./dishi-item');
require('./dishi-config');
require('./dishi-operate');
require('./dishi-show');

// parse
qiao.cli.cmd.parse(process.argv);