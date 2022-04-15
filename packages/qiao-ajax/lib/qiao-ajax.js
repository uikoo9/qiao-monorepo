'use strict';

/**
 * axios
 * 	https://www.npmjs.com/package/axios
 */
exports.axios = require('axios');

/**
 * get
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
exports.get = function(url, config){
	return req(url, 'get', config);
};

/**
 * post
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
exports.post = function(url, config){
	return req(url, 'post', config);
};

/**
 * put
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
exports.put = function(url, config){
	return req(url, 'put', config);
};

/**
 * patch
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
exports.patch = function(url, config){
	return req(url, 'patch', config);
};

/**
 * delete
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
exports.delete = function(url, config){
	return req(url, 'delete', config);
};

/**
 * head
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
exports.head = function(url, config){
	return req(url, 'head', config);
};

/**
 * options
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
exports.options = function(url, config){
	return req(url, 'options', config);
};

/**
 * req
 * 	url, url
 * 	method, method
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
function req(url, method, config){
	var options 	= {};
	options.url		= url;
	options.method 	= method;
	
	if(config){
		options = Object.assign(options, config);
	}

	return exports.axios.request(options);
}