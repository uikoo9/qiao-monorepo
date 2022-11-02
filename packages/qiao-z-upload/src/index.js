// handle
import handle from './handle.js';

/**
 * upload
 */
export const upload = handle;

/**
 * upload sync
 * @param {*} req 
 * @returns 
 */
export const uploadSync = (req) => {
    return new Promise((resolve, reject) => {
        handle(req, {
            handleParse: (err, fields, files) => {
                if (err) {
                    reject(err);
                    return;
                }

                return resolve({ fields: fields, files: files });
            }
        });
    });
};