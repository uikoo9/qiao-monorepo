/**
 * upload file
 * @param {*} app
 * @param {*} dest
 * @param {*} source
 * @param {*} cb
 * @returns
 */
export const uploadFile = (app, dest, source, cb) => {
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
    }
  );
};

/**
 * upload file sync
 * @param {*} app
 * @param {*} dest
 * @param {*} source
 * @returns
 */
export const uploadFileSync = (app, dest, source) => {
  // check
  if (!app || !app.client || !app.config) return;

  // upload
  return new Promise((resolve, reject) => {
    uploadFile(app, dest, source, (err, data) => {
      return err ? reject(err) : resolve(data);
    });
  });
};
