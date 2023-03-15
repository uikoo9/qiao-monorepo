'use strict';

var COS = require('cos-nodejs-sdk-v5');
var qiaoFile = require('qiao-file');
var qiaoCli = require('qiao-cli');

/**
 * upload file
 * @param {*} app
 * @param {*} dest
 * @param {*} source
 * @returns
 */
const uploadFile = (app, dest, source) => {
  // check
  if (!app || !app.client || !app.config) return;

  // upload
  return new Promise((resolve, reject) => {
    uploadFileWithCallback(app, dest, source, (err, data) => {
      return err ? reject(err) : resolve(data);
    });
  });
};

/**
 * upload file with callback
 * @param {*} app
 * @param {*} dest
 * @param {*} source
 * @param {*} cb
 * @returns
 */
const uploadFileWithCallback = (app, dest, source, cb) => {
  // check
  if (!app || !app.client || !app.config) return;

  // upload
  app.client.sliceUploadFile(
    {
      Region: app.config.Region,
      Bucket: app.config.Bucket,
      Key: dest,
      FilePath: source,
    },
    (err, data) => {
      if (cb) cb(err, data);
    },
  );
};

// qiao

/**
 * upload folder
 * @param {*} app
 * @param {*} destFolder
 * @param {*} sourceFolder
 * @returns
 */
const uploadFolder = async (app, destFolder, sourceFolder) => {
  // check
  if (!app || !app.client || !app.config) return;

  // time
  console.time('total use');

  // files
  const paths = await qiaoFile.lsdir(sourceFolder);
  const files = paths.files;
  const bar = new qiaoCli.progress('uploading files... :current/:total', {
    total: files.length,
  });

  // vars
  const allFiles = [];
  const sucFiles = [];
  const failFiles = [];

  // upload
  return new Promise((resolve) => {
    for (let i = 0; i < files.length; i++) {
      const file = qiaoFile.path.resolve(files[i].path, files[i].name);
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

// cos

/**
 * init app
 * @param {*} config
 * @returns
 */
const init = (config) => {
  // check
  if (!config) throw new Error('need config params');
  if (!config.SecretId) throw new Error('need config.SecretId params');
  if (!config.SecretKey) throw new Error('need config.SecretKey params');
  if (!config.Region) throw new Error('need config.Region params');
  if (!config.Bucket) throw new Error('need config.Bucket params');

  // app
  const app = {};
  app.config = config;
  app.client = new COS({
    SecretId: config.SecretId,
    SecretKey: config.SecretKey,
  });

  // upload
  app.uploadFile = async (dest, source) => {
    return await uploadFile(app, dest, source);
  };
  app.uploadFolder = async (destFolder, sourceFolder) => {
    return await uploadFolder(app, destFolder, sourceFolder);
  };

  // return
  return app;
};

module.exports = init;
