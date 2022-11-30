// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 操作zip，例如删除entry，更新file等
// handle zip

// 写入到d:/test.zip中，也可以是其他path
zip.writeZip('d:/test.zip', function (err, msg) {
  console.log(err, msg);
});

// 如果只传callback，就会写入到打开的zip文件中
zip.writeZip(function (err, msg) {
  console.log(err, msg);
});
