'use strict';

var q = require('../index.js');

var test = function(){
	var url = 'https://www.baidu.com/img/baidu_resultlogo@2.png';
	q.imgToBase64(url, function(res){
		console.log(res);
	});
};

test();