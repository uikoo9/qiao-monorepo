'use strict';

var q = require('../index.js');

var test = async function(){
	try{
		var url = 'http://10.33.12.68:8002/patch';
		var res = await q.patchSync({
			url	: url
		});
		
		console.log(res);
	}catch(e){
		console.log(e);
	}
};

test();