// qiao
import { lsdir } from "qiao-file";
import { progress } from "qiao-cli";

// upload file
import { uploadFile } from "./upload-file.js";

/**
 * upload folder
 * @param {*} app
 * @param {*} destFolder
 * @param {*} sourceFolder
 * @param {*} cb
 */
export const uploadFolder = (app, destFolder, sourceFolder, cb) => {
  // check
  if (!app || !app.client || !app.config) return;

  // time
  console.time("total use");

  // files
  const paths = lsdir(sourceFolder + "/");
  const files = paths.files;
  const bar = new progress("uploading files... :current/:total", {
    total: files.length,
  });

  // vars
  const allFiles = [];
  const sucFiles = [];
  const failFiles = [];

  // upload
  for (let i = 0; i < files.length; i++) {
    const file = files[i].path + files[i].name;
    const dest = destFolder + file.substr(sourceFolder.length);
    uploadFile(app, dest, file, (err, data) => {
      allFiles.push(data);
      if (err || !data || data.statusCode != 200) {
        failFiles.push(err || data);
      } else {
        sucFiles.push(data);
      }

      bar.tick();

      if (bar.complete) {
        const obj = {};
        obj.paths = paths;
        obj.all = allFiles;
        obj.suc = sucFiles;
        obj.fail = failFiles;

        console.log();
        console.timeEnd("total use");
        console.log();

        if (cb) cb(obj);
      }
    });
  }
};

/**
 * upload folder sync
 * @param {*} app
 * @param {*} destFolder
 * @param {*} sourceFolder
 * @returns
 */
export const uploadFolderSync = (app, destFolder, sourceFolder) => {
  // check
  if (!app || !app.client || !app.config) return;

  // upload
  return new Promise((resolve) => {
    uploadFolder(app, destFolder, sourceFolder, (rs) => {
      return resolve(rs);
    });
  });
};
