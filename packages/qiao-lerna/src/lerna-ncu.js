/**
 * qiao-lerna
 *  1.判断输入的目标文件夹是否存在且是文件夹
 * 	2.获取目标文件夹下的子文件夹数组
 * 	3.遍历该数组
 * 	4.每个子文件夹下执行ncu -u
 * 	5.每个子文件夹下执行npm i
 * 	6.以上要在控制台及时显示回馈
 * 	7.最好是多进程执行以上操作
 */

// qiao-console
import { clear, writeLine } from "qiao-console";

// check dir
import checkDir from "./util/check-dir.js";

// handler
import handleMultiNCU from "./util/handler-ncu.js";

// line
let line = 0;

/**
 * multi ncu
 * @param {*} folderName
 */
export const multiNCU = async (folderName) => {
  // clear && start
  clear();
  writeLine(line++, `start operating folder: ${folderName}`);

  // dir
  const subFolders = checkDir(folderName);

  // parallel
  handleMultiNCU(subFolders, line);
};
