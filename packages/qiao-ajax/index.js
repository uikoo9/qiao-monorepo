'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var axios = require('axios');

/**
 * get
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
const get = (url, config) => {
	return req(url, 'get', config);
};

/**
 * post
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
const post = (url, config) => {
	return req(url, 'post', config);
};

/**
 * put
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
const put = (url, config) => {
	return req(url, 'put', config);
};

/**
 * patch
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
const patch = (url, config) => {
	return req(url, 'patch', config);
};

/**
 * delete
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
const deleteReq = (url, config) => {
	return req(url, 'delete', config);
};

/**
 * head
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
const head = (url, config) => {
	return req(url, 'head', config);
};

/**
 * options
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
const options = (url, config) => {
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
const req = (url, method, config) => {
	let options = {};
	options.url = url;
	options.method = method;

	if (config) options = Object.assign(options, config);

	return axios.request(options);
};

exports.deleteReq = deleteReq;
exports.get = get;
exports.head = head;
exports.options = options;
exports.patch = patch;
exports.post = post;
exports.put = put;
