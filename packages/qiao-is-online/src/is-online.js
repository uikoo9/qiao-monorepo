// ping
import { ping } from 'qiao-ping';

// domains
const domains = [
    'tmall.com',
    'baidu.com',
    'qq.com',
    'taobao.com'
];

/**
 * isOnline
 * @param {*} strictMode 
 * @returns 
 */
export const isOnline = async (strictMode) => {
    const res = await pingDomains(domains);
    if (!res || res.length != domains.length) throw new Error('no res');

    const tmallRes = res[0];
    const baiduRes = res[1];
    const qqRes = res[2];
    const taobaoRes = res[3];
    if (strictMode) {
        if (tmallRes.alive && baiduRes.alive && qqRes.alive && taobaoRes.alive) {
            return 'online';
        } else {
            return 'offline';
        }
    } else {
        if (tmallRes.alive || baiduRes.alive || qqRes.alive || taobaoRes.alive) {
            return 'online';
        } else {
            return 'offline';
        }
    }
};

// ping domains
const pingDomains = async (hosts) => {
    const res = [];
    if (!hosts || !hosts.length) return res;

    for (let i = 0; i < hosts.length; i++) {
        const r = await ping(hosts[i]);
        res.push({
            host: r.host,
            alive: r.alive,
            time: r.time
        });
    }

    return res;
};