'use strict';

// qiao-ajax
var q = require('qiao-ajax');

// vars
var turl 	= 'https://tiyee.cn/2/create_short_url';
var noUrl	= new Error('no url');
var resErr	= new Error('res error');

/**
 * short url
 */
exports.shortUrl = function(longUrl){
	return new Promise(function(resolve, reject){
		if(!longUrl) return reject(noUrl);

		// config
		var config = {data : `url=${longUrl}`};

		// post
		q.post(turl, config)
			.then(function(res){
				// not 200
				if(!res || res.status != 200 || !res.data){
					return reject(resErr);
				}

				return resolve(res.data.short_url);
			})
			.catch(function(e){
				reject(e);
			});
	});
};