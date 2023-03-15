// qiao
import { path, lsdir } from 'qiao-file';
import { progress } from 'qiao-cli';

// upload file
import { uploadFileWithCallback } from './upload-file.js';

/**
 * upload folder
 * @param {*} app
 * @param {*} destFolder
 * @param {*} sourceFolder
 * @returns
 */
export const uploadFolder = async (app, destFolder, sourceFolder) => {
  // check
  if (!app || !app.client || !app.config) return;

  // time
  console.time('total use');

  // files
  const paths = await lsdir(sourceFolder);
  const files = paths.files;
  const bar = new progress('uploading files... :current/:total', {
    total: files.length,
  });

  // vars
  const allFiles = [];
  const sucFiles = [];
  const failFiles = [];

  // upload
  return new Promise((resolve) => {
    for (let i = 0; i < files.length; i++) {
      const file = path.resolve(files[i].path, files[i].name);
      const dest = destFolder + '/' + files[i].name;
      console.log(1, file, dest);
      uploadFileWithCallback(app, dest, file, (err, data) => {
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
          console.timeEnd('total use');
          console.log();

          resolve(obj);
        }
      });
    }
  });
};
