// qiao
import { writeLine } from "qiao-console";
import { fs, path, isExists } from "qiao-file";

// line
let line = 0;

// sub folders
const subFolders = [];

// ls dir
const lsdir = (dir) => {
  fs.readdirSync(dir).forEach((name) => {
    const stat = fs.statSync(dir + name);
    if (!stat.isDirectory()) return;

    subFolders.push(dir + name);
  });
};

/**
 * check dir
 * @param {*} folderName
 * @returns
 */
const checkDir = (folderName) => {
  // check folder name
  if (!folderName) {
    writeLine(line, "need folder name");
    return;
  }

  // dir
  const dir = path.resolve(process.cwd(), folderName) + path.sep;

  // check dir is folder
  if (!isExists(dir)) {
    writeLine(line, "folder is not exists");
    return;
  }

  // get sub folders
  lsdir(dir);
  if (!subFolders || !subFolders.length) {
    writeLine(line, "empty folder");
    return;
  }

  return subFolders;
};

export default checkDir;
