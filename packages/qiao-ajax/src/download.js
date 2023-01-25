// fs
import fs from 'fs';

// axios
import axios from 'axios';

/**
 * download
 * @param {*} url
 * @param {*} downloadPath
 * @returns
 */
export const download = async (url, downloadPath) => {
  // writer
  const writer = fs.createWriteStream(downloadPath);

  // get
  const download = axios.get(url, {
    responseType: 'stream',
  });

  // download
  return new Promise((resolve, reject) =>
    download
      .then((response) => {
        response.data.pipe(writer);

        let error = null;
        writer.on('error', (err) => {
          error = err;
          writer.close();
          reject(err);
        });
        writer.on('close', () => {
          if (!error) {
            resolve();
          }
        });
      })
      .catch((error) => {
        if (error) reject(error);
      }),
  );
};
