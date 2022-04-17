'use strict';

var q = require('../index.js');

var test = function(){
	var bar		= new q.progress(':bar', { total: 10 });
	var timer 	= setInterval(function () {
		bar.tick();
		
		if(bar.complete){
			console.log('\ncomplete\n');
			clearInterval(timer);
		}
	}, 100);
};

test();