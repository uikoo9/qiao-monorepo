// download counts
import { downloadCounts } from '../util/fetch.js'

/**
 * downloadCountsLastDay
 * @param {*} packageName 
 */
export const downloadCountsLastDay = async (packageName) => {
	if(!packageName) return;

	return await downloadCounts(packageName, 'last-day');
};

/**
 * downloadCountsLastWeek
 * @param {*} packageName 
 */
export const downloadCountsLastWeek = async (packageName) => {
	if(!packageName) return;

	return await downloadCounts(packageName, 'last-week');
};

/**
 * downloadCountsLastMonth
 * @param {*} packageName 
 */
export const downloadCountsLastMonth = async (packageName) => {
	if(!packageName) return;

	return await downloadCounts(packageName, 'last-month');
};