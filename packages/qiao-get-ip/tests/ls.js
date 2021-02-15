'use strict';

var q = require('../lib/qiao-get-ip');w

// set boolean
test('set boolean, get boolean', function(){
   var key     = 'key-boolean';
   var value   = true;

   qls.ls(key, value);
   expect(qls.ls(key)).toStrictEqual(value);
});