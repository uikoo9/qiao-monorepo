#!/usr/bin/env node

'use strict';

// qiao
var qiao = require('../src/util/qiao.js');

// package
var pkg = require('../package.json');

// cmd for version
qiao.cli.cmd
	.version(pkg.version, '-v, --version')
	.usage('<command> [options]');