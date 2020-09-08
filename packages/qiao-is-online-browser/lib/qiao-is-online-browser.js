'use strict';

// offline to online
var o = require('offline-to-online');

/**
 * is online
 *  src, online img src
 */
exports.isOnline = function(src){
	return new Promise(function(resolve, reject){
        if(!src) return reject(Error('need online img src'));

        var img 	= new Image();
        img.src 	= `${src}?r=${Math.random()}`;
        img.onload 	= function(){resolve('online');};
		img.onerror = function(){resolve('offline');};
	});
};

/**
 * offline to online
 *  callback
 *  time
 */
exports.offlineToOnline = function(callback, time){
    o.offlineToOnline(exports.isOnline, callback, time);
};