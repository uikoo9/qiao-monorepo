#!/usr/bin/env node

'use strict';

// qiao
var qiao = {};
qiao.cli = require('qiao-cli');

// cmds
require('./qlerna-dc.js');
require('./qlerna-ncu.js');
require('./qlerna-pkg.js');
require('./qlerna-version.js');

// parse
qiao.cli.cmd.parse(process.argv);