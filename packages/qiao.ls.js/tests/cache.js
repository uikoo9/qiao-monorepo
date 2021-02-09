'use strict';

var qls = require('../qiao.ls.js');

// set value, get value
test('set value, get value', function(){
    var name    = 'cache.group';
    var key     = 'team-123';
    var value   = false;

    qls.cache(name, key, value);

    expect(qls.cache(name, key)).toStrictEqual(value);
});

// del value
test('del value', function(){
    var name    = 'cache.group';
    var key     = 'team-123';
    var value   = false;

    expect(qls.cache(name, key)).toStrictEqual(value);

    qls.cache(name, key, null);
    expect(qls.cache(name, key)).toBeUndefined();
});