## qiao-sms

[![npm version](https://img.shields.io/npm/v/qiao-sms.svg?style=flat-square)](https://www.npmjs.org/package/qiao-sms)
[![npm downloads](https://img.shields.io/npm/dm/qiao-sms.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-sms)

nodejs 下腾讯云 sms 常见 api 封装

## api

### send

```javascript
// qiao-sms
const q = require('qiao-sms');

const test = () => {
  // 普通单条短信-简化
  q.send({
    appid: 'your appid',
    appkey: 'your appkey',
    sign: 'your sign',
    mobile: 'mobile',
    msg: '您的验证码是：12345，如非本人操作，请忽略此短信。',
  });

  // 普通单条短信-定制&回调
  q.send(
    {
      appid: 'your appid',
      appkey: 'your appkey',
      sign: 'your sign',
      mobile: 'mobile',
      msg: '您的验证码是：1234，如非本人操作，请忽略此短信。',
      mtype: '0：普通短信，1：营销短信，可选',
      cnum: '86：中国，可选',
    },
    (err, res) => {
      console.log(err, res);
    },
  );
};

test();
```

### sendSync

```javascript
// qiao-sms
const q = require('qiao-sms');

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
```

## version

### 0.0.5.20221109

1. es6

### 0.0.4.20220512

1. lerna

### 0.0.3.20191206

1. add funding

### 0.0.2.20190107

1. nodejs tencent sms tool

### 0.0.1.20181127

1. init project
2. send
3. send sync
