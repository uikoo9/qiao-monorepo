// cos
import COS from 'cos-nodejs-sdk-v5';

// upload
import { uploadFile, uploadFileSync } from './upload-file.js';
import { uploadFolder, uploadFolderSync } from './upload-folder.js';

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
  app.uploadFile = (dest, source, cb) => {
    uploadFile(app, dest, source, cb);
  };
  app.uploadFileSync = async (dest, source) => {
    return await uploadFileSync(app, dest, source);
  };
  app.uploadFolder = (destFolder, sourceFolder, cb) => {
    uploadFolder(app, destFolder, sourceFolder, cb);
  };
  app.uploadFolderSync = async (destFolder, sourceFolder) => {
    return await uploadFolderSync(app, destFolder, sourceFolder);
  };

  // return
  return app;
};

export default init;
