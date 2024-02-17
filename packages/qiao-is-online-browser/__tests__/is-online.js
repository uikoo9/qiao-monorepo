const { isOnline } = require('../index.js');

async function test() {
  try {
    const res = await isOnline('http://www.baidu.com/img/flexible/logo/pc/result.png');
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

test();
