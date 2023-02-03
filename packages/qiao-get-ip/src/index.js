// ajax
import { post } from 'qiao-ajax';

// ip-regex
import i from 'ip-regex';

/**
 * getIp
 * @returns
 */
export const getIp = async () => {
  // url
  const url = 'https://insistime.com/ip';
  const res = await post(url);

  // not 200
  if (!res || res.status != 200 || !res.data || !res.data.type || !res.data.obj || !res.data.obj.ip) {
    console.log('get ip failed');
    return;
  }

  // ip
  const ip = res.data.obj.ip;
  const isIp = i.v4({ exact: true }).test(ip);
  if(!isIp){
    console.log('get ip failed');
    return;
  }

  // 
  return ip;
};
