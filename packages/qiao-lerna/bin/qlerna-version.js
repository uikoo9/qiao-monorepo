'use strict';

// qiao
var qiao = {};
qiao.cli = require('qiao-cli');

// cmd for common
qiao.cli.cmd
	.version(require('../package.json').version, '-v, --version')
	.description('qiao-lerna, lerna tools')
	.usage('<command> [options]');