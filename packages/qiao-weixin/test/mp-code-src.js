"use strict";

var q = require("../index.js");

var test = async function () {
  // accessToken
  var accessToken =
    "17_0AzllqnmN-cnbXzzG07DCTGTiHKbDUARkE6db4WAAe_WDncKQNznPYYpKi_-HBSyvXdt7kUHNGzhcTWj1cKyNhyM_0AJtb5blBVi5Hja7rlVnSQI93GlmIpNlNjDw2J4CK7wr0LI4WDWb0lZXEEfAHAMTT";

  // mp code src by api 1 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACode.html
  var src1 = await q.mpCodeSrc(1, accessToken, {
    path: "views/ucenter-register/ucenter-register",
  });

  // mp code src by api 2 : https://developers.weixin.qq.com/miniprogram/dev/api/getWXACodeUnlimit.html
  var src2 = await q.mpCodeSrc(
    2,
    accessToken,
    { page: "views/ucenter-register/ucenter-register", scene: "1" },
    "jpg"
  );

  // mp code src by api 3 : https://developers.weixin.qq.com/miniprogram/dev/api/createWXAQRCode.html
  var src3 = await q.mpCodeSrc(
    3,
    accessToken,
    { path: "views/ucenter-register/ucenter-register" },
    "png"
  );

  console.log(src1);
  console.log(src2);
  console.log(src3);
};

test();
