// qiao-sms
const q = require('../index.js');

const test = async () => {
  try {
    // 普通单条短信-简化
    const msg1 = await q.sendSync({
      appid: 'your appid',
      appkey: 'your appkey',
      sign: 'your sign',
      mobile: 'mobile',
      msg: '您的验证码是：1234，如非本人操作，请忽略此短信。',
    });
    console.log(msg1);

    // 普通单条短信-定制&回调
    const msg2 = await q.sendSync({
      appid: 'your appid',
      appkey: 'your appkey',
      sign: 'your sign',
      mobile: 'mobile',
      msg: '您的验证码是：1234，如非本人操作，请忽略此短信。',
      mtype: '0：普通短信，1：营销短信，可选',
      cnum: '86：中国，可选',
    });
    console.log(msg2);
  } catch (e) {
    console.log(e);
  }
};

test();
