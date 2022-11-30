// qiao-parallel
import { parallelByIIFE } from 'qiao-parallel';

// vars
import { setLine, callback, complete } from './_funcs.js';
import { handler } from './_handler_download_counts.js';

/**
 * handle download counts
 * @param {*} folders
 * @param {*} line
 */
const handleDownloadCounts = (folders, line) => {
  setLine(line);

  parallelByIIFE(handler, folders, callback, complete);
};

export default handleDownloadCounts;
