// qiao-console
import { clear, writeLine } from "qiao-console";

// check dir
import checkDir from "./util/check-dir.js";

// handler
import handlePkg from "./util/handler-pkg.js";

// line
let line = 0;

/**
 * pkg
 * @param {*} folderName
 * @param {*} isDev
 */
export const pkg = async (folderName, isDev) => {
  // clear && start
  clear();
  writeLine(line++, `start operating folder: ${folderName}`);

  // dir
  const subFolders = checkDir(folderName);

  // handler
  handlePkg(subFolders, line, isDev);
};
