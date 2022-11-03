## qiao-cli

[![npm version](https://img.shields.io/npm/v/qiao.ls.js.svg?style=flat-square)](https://www.npmjs.org/package/qiao.ls.js)
[![npm downloads](https://img.shields.io/npm/dm/qiao.ls.js.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao.ls.js)

nodejs下cli能力

## api
### colors
```javascript
'use strict';

var q = require('qiao-cli');

// colors
console.log(q.colors.green('hello'));
```

### progress
```javascript
'use strict';

var q = require('qiao-cli');

var test = function () {
    var bar = new q.progress(':bar', { total: 10 });
    var timer = setInterval(function () {
        bar.tick();

        if (bar.complete) {
            console.log('\ncomplete\n');
            clearInterval(timer);
        }
    }, 100);
};

test();
```

### ask
```javascript
'use strict';

var q = require('qiao-cli');

var test = async function () {
    var questions = [{
        type: 'list',
        name: 'type',
        message: 'What type of code do you want to generate?',
        choices: ['front', 'server', 'manage']
    }];

    var answers = await q.ask(questions);
    console.log(answers);
};

test();
```

### cmd
```javascript
'use strict';

var q = require('qiao-cli');

// cmd
q.cmd
    .version('0.0.1', '-v, --version')
    .usage('<command> [options]')
    .description('qiao-cli is a nodejs cli tool')
    .command('test <dir>')
    .option('-s --ss', 'ss')
    .action(function (dir, options) {
        console.log(dir, options);
    });

// parse
q.cmd.parse(process.argv);
```

## version
### 0.0.9.20221103
1. 1.0.0
   
### 0.0.8.20200803
1. ncu

### 0.0.7.20191205
1. update packages
2. add funding

### 0.0.6.20190808
1. update npms

### 0.0.5.20190128
1. add progress

### 0.0.4.20190109
1. update inquirer@6.2.1
2. add colors 

### 0.0.3.20181127
1. cmd.js
2. add.js

### 0.0.2.20181120
1. add commander

### 0.0.1.20181023
1. init project
2. add inquirer
3. add ask method
