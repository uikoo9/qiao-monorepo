// download counts
import { getDownloadCounts } from '../util/fetch.js';

/**
 * downloadCounts
 * @param {*} packageName
 * @param {*} type
 * @returns
 */
export const downloadCounts = async (packageName, type) => {
  if (!packageName || !type) return;

  return await getDownloadCounts(packageName, type);
};

/**
 * downloadCountsLastDay
 * @param {*} packageName
 */
export const downloadCountsLastDay = async (packageName) => {
  if (!packageName) return;

  return await getDownloadCounts(packageName, 'last-day');
};

/**
 * downloadCountsLastWeek
 * @param {*} packageName
 */
export const downloadCountsLastWeek = async (packageName) => {
  if (!packageName) return;

  return await getDownloadCounts(packageName, 'last-week');
};

/**
 * downloadCountsLastMonth
 * @param {*} packageName
 */
export const downloadCountsLastMonth = async (packageName) => {
  if (!packageName) return;

  return await getDownloadCounts(packageName, 'last-month');
};
