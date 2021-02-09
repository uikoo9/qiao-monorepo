'use strict';

var qls = require('../lib/qiao.ls.js');

// set boolean
test('set boolean, get boolean', function(){
   var key     = 'key-boolean';
   var value   = true;

   qls.ls(key, value);
   expect(qls.ls(key)).toStrictEqual(value);
});

// set number
test('set number, get number', function(){
   var key     = 'key-number';
   var value   = 1;

   qls.ls(key, value);
   expect(qls.ls(key)).toStrictEqual(value);
});

// set string
test('set string, get string', function(){
   var key     = 'key-string';
   var value   = 'string';

   qls.ls(key, value);
   expect(qls.ls(key)).toStrictEqual(value);
});

// set object
test('set object, get object', function(){
   var key     = 'key-object';
   var value   = {name:'vincent'};

   qls.ls(key, value);
   expect(qls.ls(key)).toStrictEqual(value);
});

// del
test('del key', function(){
   var key     = 'key-object';
   var value   = {name:'vincent'};
   
   expect(qls.ls(key)).toStrictEqual(value);
   
   qls.ls(key, null);
   expect(qls.ls(key)).toBeUndefined();
});