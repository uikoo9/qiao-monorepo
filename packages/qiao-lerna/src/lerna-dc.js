// qiao-console
import { clear, writeLine } from 'qiao-console';

// check dir
import checkDir from './util/check-dir.js';

// handler
import handleDownloadCounts from './util/handler-dc.js';

// line
let line = 0;

/**
 * download counts
 * @param {*} folderName
 */
export const downloadCounts = async (folderName) => {
  // clear && start
  clear();
  writeLine(line++, `start operating folder: ${folderName}`);

  // dir
  const subFolders = await checkDir(folderName);

  // handler
  handleDownloadCounts(subFolders, line);
};
