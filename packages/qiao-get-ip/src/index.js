// get ip by sohu
import { getIpBySohu } from './get-ip-by-sohu.js';

// get ip by icanhazip
import { getIpByIcanhazip } from './get-ip-by-icanhazip.js';

/**
 * getIp
 * @returns
 */
export const getIp = async () => {
  return new Promise((resolve, reject) => {
    Promise.race([getIpBySohu, getIpByIcanhazip])
      .then((value) => {
        resolve(value);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
