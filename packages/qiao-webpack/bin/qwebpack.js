#!/usr/bin/env node

'use strict';

// qiao
var qiao = {};
qiao.cli = require('qiao.plugin.cli');

// cmds
require('./qwebpack-version.js');
require('./qwebpack-build.js');

// parse
qiao.cli.cmd.parse(process.argv);