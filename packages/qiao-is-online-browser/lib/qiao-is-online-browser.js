'use strict';

// offline to online
var o = require('offline-to-online');

// is online img
var isOnlineImg = require('./config.json').img;

/**
 * is online
 * 	img, img src
 */
exports.isOnline = function(img){
	var src = img || isOnlineImg;

	return new Promise(function(resolve, reject){
        var img 	= new Image();
        img.src 	= `${src}?r=${Math.random()}`;
        img.onload 	= function(){resolve(true);};
		img.onerror = function(){resolve(false);};
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