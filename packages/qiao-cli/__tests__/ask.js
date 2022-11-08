'use strict';

// qiao-cli
const cli = require('../index.js');

// test
const test = async () => {
    const questions = [{
        type: 'list',
        name: 'type',
        message: 'What type of code do you want to generate?',
        choices: ['front', 'server', 'manage']
    }];

    const answers = await cli.ask(questions);
    console.log(answers);
};

// run
test();