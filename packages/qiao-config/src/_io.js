// fs
import { writeFileSync, readFileSync, accessSync } from 'fs';

/**
 * write file
 * @param {*} filePath
 * @param {*} data
 */
export const writeFile = (filePath, data) => {
  writeFileSync(filePath, data);
};

/**
 * read file
 * @param {*} filePath
 * @returns
 */
export const readFile = (filePath) => {
  try {
    // not exists write file
    if (!isExists(filePath)) writeFile(filePath, '');

    return readFileSync(filePath, { encoding: 'utf8' });
  } catch (e) {
    return null;
  }
};

// is exists
function isExists(filePath) {
  try {
    accessSync(filePath);

    return true;
  } catch (e) {
    return false;
  }
}
