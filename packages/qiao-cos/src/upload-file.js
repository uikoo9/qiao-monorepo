/**
 * upload file
 * @param {*} app
 * @param {*} dest
 * @param {*} source
 * @returns
 */
export const uploadFile = (app, dest, source) => {
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
export const uploadFileWithCallback = (app, dest, source, cb) => {
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
