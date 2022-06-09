// qiao
import { get } from 'qiao-ajax';

/**
 * download counts
 * @param {*} packageName 
 * @param {*} type 
 * @returns 
 */
export const downloadCounts = async (packageName, type) => {
    // check
	if(!packageName || !type) return;
	
    // res
    const url = `https://api.npmjs.org/downloads/point/${type}/${packageName}`;
    const res = await get(url);

    // check res
    if(!res || res.status != 200) return;

    // return
    return res.data;
}; 