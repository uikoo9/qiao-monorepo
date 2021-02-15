'use strict';

var q = require('../qiao.ls.js');

// set boolean
test('set boolean, get boolean', function(){
   var key     = 'key-boolean';
   var value   = true;

   q.ls(key, value);
   expect(q.ls(key)).toStrictEqual(value);
});

// set number
test('set number, get number', function(){
   var key     = 'key-number';
   var value   = 1;

   q.ls(key, value);
   expect(q.ls(key)).toStrictEqual(value);
});

// set string
test('set string, get string', function(){
   var key     = 'key-string';
   var value   = 'string';

   q.ls(key, value);
   expect(q.ls(key)).toStrictEqual(value);
});

// set object
test('set object, get object', function(){
   var key     = 'key-object';
   var value   = {name:'vincent'};

   q.ls(key, value);
   expect(q.ls(key)).toStrictEqual(value);
});

// del
test('del key', function(){
   var key     = 'key-object';
   var value   = {name:'vincent'};
   
   expect(q.ls(key)).toStrictEqual(value);
   
   q.ls(key, null);
   expect(q.ls(key)).toBeUndefined();
});

// expires
test('expires', async function(){
   // vars
   var key     = 'key-expires';
   var value   = 'expires';
   var expires = 3 * 1000;
   q.ls(key, value, expires);

   // not expires
   expect(q.ls(key)).toStrictEqual(value);

   // not expires
   var v = await getValue(key, 2 * 1000);
   expect(v).toStrictEqual(value);

   // expires
   var vv = await getValue(key, 2 * 1000);
   expect(vv).toBeUndefined();
});

// get value
function getValue(key, time){
   return new Promise(function(resolve, reject){
      setTimeout(function(){
         return resolve(q.ls(key));
      }, time);
	});
}