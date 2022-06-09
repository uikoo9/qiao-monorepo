'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var qiaoAjax = require('qiao-ajax');

// qiao

/**
 * download counts
 * @param {*} packageName 
 * @param {*} type 
 * @returns 
 */
const downloadCounts = async (packageName, type) => {
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
 * downloadCountsLastDay
 * @param {*} packageName 
 */
const downloadCountsLastDay = async (packageName) => {
	if(!packageName) return;

	return await downloadCounts(packageName, 'last-day');
};

/**
 * downloadCountsLastWeek
 * @param {*} packageName 
 */
const downloadCountsLastWeek = async (packageName) => {
	if(!packageName) return;

	return await downloadCounts(packageName, 'last-week');
};

/**
 * downloadCountsLastMonth
 * @param {*} packageName 
 */
const downloadCountsLastMonth = async (packageName) => {
	if(!packageName) return;

	return await downloadCounts(packageName, 'last-month');
};

exports.downloadCountsLastDay = downloadCountsLastDay;
exports.downloadCountsLastMonth = downloadCountsLastMonth;
exports.downloadCountsLastWeek = downloadCountsLastWeek;
