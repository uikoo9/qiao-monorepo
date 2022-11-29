// qiao-ajax
import q from "qiao-ajax";

// ip-regex
import i from "ip-regex";

// urls
const hipUrl = "http://icanhazip.com/";
const hipErr = new Error("get ip by icanhazip failed");

// not ip
const notIpErr = new Error("not ip");

/**
 * getIpByIcanhazip
 * @returns
 */
export const getIpByIcanhazip = () => {
  return new Promise(function (resolve, reject) {
    q.get(hipUrl)
      .then(function (res) {
        // not 200
        if (!res || res.status != 200 || !res.data) {
          return reject(hipErr);
        }

        // ip
        const ip = res.data.replace(/\n/g, "");
        if (!ip) return reject(hipErr);

        const isIp = i.v4({ exact: true }).test(ip);
        return isIp ? resolve(ip) : reject(notIpErr);
      })
      .catch(function (e) {
        reject(e);
      });
  });
};
