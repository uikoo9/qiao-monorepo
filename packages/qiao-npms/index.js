'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var qiaoAjax = require('qiao-ajax');
var search = require('libnpmsearch');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var search__default = /*#__PURE__*/_interopDefaultLegacy(search);

// qiao

/**
 * get download counts
 * @param {*} packageName 
 * @param {*} type 
 * @returns 
 */
const getDownloadCounts = async (packageName, type) => {
    // check
	if(!packageName || !type) return;
	
    // res
    const url = `https://api.npmjs.org/downloads/point/${type}/${packageName}`;
    const res = await qiaoAjax.get(url);

    // check res
    if(!res || res.status != 200) return;

    // return
    return res.data;
};

// download counts

/**
 * downloadCounts
 * @param {*} packageName 
 * @param {*} type 
 * @returns 
 */
 const downloadCounts = async (packageName, type) => {
	if(!packageName || !type) return;

	return await getDownloadCounts(packageName, type);
};

/**
 * downloadCountsLastDay
 * @param {*} packageName 
 */
const downloadCountsLastDay = async (packageName) => {
	if(!packageName) return;

	return await getDownloadCounts(packageName, 'last-day');
};

/**
 * downloadCountsLastWeek
 * @param {*} packageName 
 */
const downloadCountsLastWeek = async (packageName) => {
	if(!packageName) return;

	return await getDownloadCounts(packageName, 'last-week');
};

/**
 * downloadCountsLastMonth
 * @param {*} packageName 
 */
const downloadCountsLastMonth = async (packageName) => {
	if(!packageName) return;

	return await getDownloadCounts(packageName, 'last-month');
};

// search

/**
 * searchPackages
 * @param {*} packageName 
 * @param {*} options 
 */
const searchPackages = async (packageName, options) => {
    // check
    if(!packageName) return;

    // default options
    const defaultOptions = {
        limit: 3,
        sortBy: 'popularity'
    };

    // search
    return await search__default["default"](packageName, options || defaultOptions);
};

exports.downloadCounts = downloadCounts;
exports.downloadCountsLastDay = downloadCountsLastDay;
exports.downloadCountsLastMonth = downloadCountsLastMonth;
exports.downloadCountsLastWeek = downloadCountsLastWeek;
exports.searchPackages = searchPackages;
