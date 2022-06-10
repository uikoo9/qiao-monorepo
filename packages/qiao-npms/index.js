'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var qiaoAjax = require('qiao-ajax');

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

exports.downloadCounts = downloadCounts;
exports.downloadCountsLastDay = downloadCountsLastDay;
exports.downloadCountsLastMonth = downloadCountsLastMonth;
exports.downloadCountsLastWeek = downloadCountsLastWeek;
