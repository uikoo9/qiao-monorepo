// qiao-ajax
import { get } from 'qiao-ajax';

// ip-regex
import i from 'ip-regex';

// urls
const sohuUrl = 'http://txt.go.sohu.com/ip/soip';
const sohuErr = new Error('get ip by sohu failed');

// not ip
const notIpErr = new Error('not ip');

/**
 * getIpBySohu
 * @returns
 */
export const getIpBySohu = () => {
  return new Promise(function (resolve, reject) {
    get(sohuUrl)
      .then(function (res) {
        // not 200
        if (!res || res.status != 200 || !res.data) {
          return reject(sohuErr);
        }

        // ip
        const s = res.data.match(/\d+\.\d+\.\d+\.\d+/g);
        const ip = s && s.length ? s[0] : null;
        if (!ip) return reject(sohuErr);

        const isIp = i.v4({ exact: true }).test(ip);
        return isIp ? resolve(ip) : reject(notIpErr);
      })
      .catch(function (e) {
        reject(e);
      });
  });
};
