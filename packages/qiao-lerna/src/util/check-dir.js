// qiao
import { writeLine } from 'qiao-console';
import { path, readDir, isDir, isExists } from 'qiao-file';

// line
let line = 0;

// sub folders
const subFolders = [];

// ls dir
const lsdir = async (dir) => {
  const files = await readDir(dir);
  for (let i = 0; i < files.length; i++) {
    const subPath = path.resolve(dir, files[i]);
    const isDirRes = await isDir(subPath);
    if (!isDirRes) continue;

    subFolders.push(subPath);
  }
};

/**
 * check dir
 * @param {*} folderName
 * @returns
 */
const checkDir = async (folderName) => {
  // check folder name
  if (!folderName) {
    writeLine(line, 'need folder name');
    return;
  }

  // dir
  const dir = path.resolve(process.cwd(), folderName);
  const dirExists = await isExists(dir);

  // check dir is folder
  if (!dirExists) {
    writeLine(line, 'folder is not exists');
    return;
  }

  // get sub folders
  await lsdir(dir);
  if (!subFolders || !subFolders.length) {
    writeLine(line, 'empty folder');
    return;
  }

  return subFolders;
};

export default checkDir;
