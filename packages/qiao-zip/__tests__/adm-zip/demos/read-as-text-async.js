// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取d:/test.zip中的test.js这个entry
var entry = zip.getEntry('test.js');

// 获取entry对应的text
zip.readAsTextAsync(
  entry,
  function (data, err) {
    console.log(data, err);
  },
  'utf8',
);
