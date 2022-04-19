'use strict';

// path
var path = require('path');

// q
var q = require('../index.js');

var test = function(){
    var jsPath = path.resolve(__dirname, './cp.js');
    var args = ['haha'];

    var cp = q.fork(jsPath, args, function(msg){
        console.log(`from child process: ${msg}`);
    }, function(code){
        console.log(`exit code: ${code}`);
    });

    cp.send('hello child process');
    
    // kill cp
    setTimeout(function(){
        q.kill(cp.pid);
    }, 3000);
};

test();