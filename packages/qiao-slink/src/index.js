// qs
import { stringify } from 'qs';

// qiao-ajax
import { post } from 'qiao-ajax';

// vars
const turl = 'https://tiyee.cn/2/create_short_url';

/**
 * short link
 */
export const shortLink = async (longLink) => {
  if (!longLink) return msg(false, 'need long link');

  // config
  const config = {
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: stringify({ url: longLink }),
  };

  // post
  try {
    const res = await post(turl, config);
    if (!res || res.status !== 200 || !res.data) return msg(false, 'request short link errror');

    return msg(true, res.data.short_url);
  } catch (error) {
    return msg(false, 'request short link errror', error);
  }
};

// msg
function msg(res, msg, err) {
  return {
    res,
    msg,
    err,
  };
}
