// path
import path from 'path';

// readline
import readline from 'readline';

// fs
import { readFile as readFileByFse, createReadStream, outputFile } from 'fs-extra';

/**
 * extname
 * @param {*} filePath
 * @returns
 */
export const extname = (filePath) => {
  if (!filePath) return;

  return path.extname(filePath.toLowerCase());
};

/**
 * readFile
 * @param {*} filePath
 * @param {*} options https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsreadfilesyncpath-options
 * @returns
 */
export const readFile = async (filePath, options) => {
  // check
  if (!filePath) return;

  try {
    // opt
    const opt = { encoding: 'utf8' };
    options = options || opt;

    return await readFileByFse(filePath, options);
  } catch (e) {
    console.log(e);
  }
};

/**
 * readFileLineByLine
 * @param {*} filePath
 * @param {*} onLine
 * @param {*} onClose
 */
export const readFileLineByLine = (filePath, onLine, onClose) => {
  // rl
  const rl = readline.createInterface({
    input: createReadStream(filePath, { encoding: 'utf8' }),
  });

  // on
  rl.on('line', function (line) {
    if (onLine) onLine(line);
  });
  rl.on('close', function () {
    if (onClose) onClose();
  });
};

/**
 * writeFile
 * @param {*} filePath
 * @param {*} fileData
 * @param {*} options https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilesyncfile-data-options
 */
export const writeFile = async (filePath, fileData, options) => {
  // check
  if (!filePath) return;

  try {
    // vars
    fileData = fileData || '';
    options = options || {};
    await outputFile(filePath, fileData, options);

    return true;
  } catch (e) {
    console.log(e);
  }
};
