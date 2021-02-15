'use strict';

var q = require('../qiao.ls.js');

// set value, get value
test('set value, get value', function(){
    var name    = 'cache.group';
    var key     = 'team-123';
    var value   = false;

    q.cache(name, key, value);

    expect(q.cache(name, key)).toStrictEqual(value);
});

// del value
test('del value', function(){
    var name    = 'cache.group';
    var key     = 'team-123';
    var value   = false;

    expect(q.cache(name, key)).toStrictEqual(value);

    q.cache(name, key, null);
    expect(q.cache(name, key)).toBeUndefined();
});