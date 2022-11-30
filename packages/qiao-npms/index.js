'use strict';

var qiaoAjax = require('qiao-ajax');
var search = require('libnpmsearch');

// qiao

/**
 * get download counts
 *  https://github.com/npm/registry/blob/master/docs/download-counts.md
 * @param {*} packageName
 * @param {*} type
 * @returns
 */
const getDownloadCounts = async (packageName, type) => {
  // check
  if (!packageName || !type) return;

  // res
  const url = `https://api.npmjs.org/downloads/point/${type}/${packageName}`;
  const res = await qiaoAjax.get(url);

  // check res
  if (!res || res.status != 200) return;

  // return
  return res.data;
};

/**
 * get latest version
 * @param {*} packageName
 * @returns
 */
const getLatestVersion = async (packageName) => {
  // check
  if (!packageName) return;

  // res
  const url = `https://registry.npmjs.org/${packageName}`;
  const res = await qiaoAjax.get(url, {
    headers: {
      Accept: 'application/vnd.npm.install-v1+json',
    },
  });

  // check res
  if (!res || res.status != 200) return;

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
  if (!packageName || !type) return;

  return await getDownloadCounts(packageName, type);
};

/**
 * downloadCountsLastDay
 * @param {*} packageName
 */
const downloadCountsLastDay = async (packageName) => {
  if (!packageName) return;

  return await getDownloadCounts(packageName, 'last-day');
};

/**
 * downloadCountsLastWeek
 * @param {*} packageName
 */
const downloadCountsLastWeek = async (packageName) => {
  if (!packageName) return;

  return await getDownloadCounts(packageName, 'last-week');
};

/**
 * downloadCountsLastMonth
 * @param {*} packageName
 */
const downloadCountsLastMonth = async (packageName) => {
  if (!packageName) return;

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
  if (!packageName) return;

  // default options
  const defaultOptions = {
    limit: 3,
    sortBy: 'popularity',
  };

  // search
  return await search(packageName, options || defaultOptions);
};

// get latest

/**
 * get version
 * @param {*} packageName
 * @returns
 */
const getVersion = async (packageName) => {
  if (!packageName) return;

  const res = await getLatestVersion(packageName);
  if (!res || !res['dist-tags'] || !res['dist-tags'].latest) return;

  return res['dist-tags'].latest;
};

exports.downloadCounts = downloadCounts;
exports.downloadCountsLastDay = downloadCountsLastDay;
exports.downloadCountsLastMonth = downloadCountsLastMonth;
exports.downloadCountsLastWeek = downloadCountsLastWeek;
exports.getVersion = getVersion;
exports.searchPackages = searchPackages;
