#!/usr/bin/env node

'use strict';

// qiao
var qiao = {};
qiao.cli = require('qiao-cli');

// cmds
require('./qlerna-ncu.js');
require('./qlerna-version.js');

// parse
qiao.cli.cmd.parse(process.argv);