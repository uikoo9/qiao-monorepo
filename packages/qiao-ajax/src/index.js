'use strict';

/**
 * axios
 * 	https://www.npmjs.com/package/axios
 */
import { request } from 'axios';

/**
 * get
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
export const get = (url, config) => {
	return req(url, 'get', config);
};

/**
 * post
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
export const post = (url, config) => {
	return req(url, 'post', config);
};

/**
 * put
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
export const put = (url, config) => {
	return req(url, 'put', config);
};

/**
 * patch
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
export const patch = (url, config) => {
	return req(url, 'patch', config);
};

/**
 * delete
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
export const deleteReq = (url, config) => {
	return req(url, 'delete', config);
};

/**
 * head
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
export const head = (url, config) => {
	return req(url, 'head', config);
};

/**
 * options
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
export const options = (url, config) => {
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

	return request(options);
};