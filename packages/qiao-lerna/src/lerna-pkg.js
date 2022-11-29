// cli
import { colors } from "qiao-cli";

// check dir
import checkDir from "./util/check-dir.js";

// pkg
import { getPkgInfo } from "./util/_pkg.js";

/**
 * pkg
 * @param {*} folderName
 * @param {*} isDev
 */
export const pkg = async (folderName, isDev) => {
  // dir
  const subFolders = checkDir(folderName);

  // check
  if (!subFolders || !subFolders.length) return;

  // for
  subFolders.forEach((item) => {
    // pkg
    const pkg = getPkgInfo(item);

    // no pkg.json
    if(typeof pkg === "string"){
      console.log(colors.white(pkg));
      console.log();
      return;
    }

    // log
    console.log(colors.white(pkg.packageName));

    // package json
    const packageJson = pkg.packageJson;
    const json = isDev ? packageJson.devDependencies : packageJson.dependencies;
    console.log(colors.grey(json || {}));
    console.log();
  });
};
