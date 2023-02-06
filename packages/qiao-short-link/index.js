'use strict';

var qs = require('qs');
var qiaoAjax = require('qiao-ajax');

// qs

// vars
const turl = 'https://tiyee.cn/2/create_short_url';

/**
 * short link
 */
const shortLink = async (longLink) => {
  if (!longLink) return msg(false, 'need long link');

  // config
  const config = {
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({ url: longLink }),
  };

  // post
  try {
    const res = await qiaoAjax.post(turl, config);
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

exports.shortLink = shortLink;
