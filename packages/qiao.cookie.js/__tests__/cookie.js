'use strict';

var q = require('../index.js');

// set and get
test('set and get', function(){
    var key = 'key';
    var value = 'value';

    q.set(key, value);
    expect(q.get(key)).toStrictEqual(value);
});

// has
test('has', function(){
    var key = 'key';
    var value = 'value';

    q.set(key, value);
    expect(q.has(key)).toBeTruthy();
});

// del
test('del', function(){
    var key = 'key';
    var value = 'value';

    q.set(key, value);
    q.del(key);
    expect(q.has(key)).toBeFalsy();
});

// keys
test('keys', function(){
    var key = 'key1';
    var value = 'value';

    q.set(key, value);
    expect(q.keys()).toBeDefined();
});