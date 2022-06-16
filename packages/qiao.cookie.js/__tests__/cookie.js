'use strict';

var q = require('../index.js');

var test = async function(){
    // vars
    var key = 'test';
    var value = 'test';

    // set & get
    q.set(key, value);
    console.log('set cookie test:' + q.get(key));

    // del
    q.del(key);
    console.log('del cookie test:' + q.get(key));

    // has
    console.log(q.has(key));

    // keys
    console.log(q.keys());
};

test();