'use strict';

// exports
module.exports = isOnline;

/**
 * is online
 *  src, online img src
 */
function isOnline(src){
	return new Promise(function(resolve, reject){
        if(!src) return reject(Error('need online img src'));

        var img 	= new Image();
        img.src 	= `${src}?r=${Math.random()}`;
        img.onload 	= function(){resolve('online');};
		img.onerror = function(){resolve('offline');};
	});
}