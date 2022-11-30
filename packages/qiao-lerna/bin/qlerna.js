#!/usr/bin/env node

// qiao
const cli = require('qiao-cli');

// cmds
require('./qlerna-dc.js');
require('./qlerna-ncu.js');
require('./qlerna-pkg.js');
require('./qlerna-version.js');

// parse
cli.cmd.parse(process.argv);
