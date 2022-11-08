'use strict';

// qiao-cli
const cli = require('../index.js');

// cmd
cli.cmd
    .version('0.0.1', '-v, --version')
    .usage('<command> [options]')
    .description('qiao-cli is a nodejs cli tool')
    .command('test <dir>')
    .option('-s --ss', 'ss')
    .action((dir, options) => {
        console.log(dir, options);
    });

// parse
cli.cmd.parse(process.argv);