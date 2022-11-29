// get ip by sohu
import { getIpBySohu } from "./get-ip-by-sohu.js";

// get ip by icanhazip
import { getIpByIcanhazip } from "./get-ip-by-icanhazip.js";

/**
 * getIp
 * @returns
 */
export const getIp = async () => {
  let ip;

  // by sohu
  try {
    ip = await getIpBySohu();
  } catch (e1) {
    // by icanhazip
    try {
      ip = await getIpByIcanhazip();
    } catch (e2) {
      console.log(e1, e2);
    }
  }

  return ip;
};
