// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取所有zip中entry并遍历
zip.getEntries().forEach(function (entry) {
  var entryName = entry.entryName;
  console.log(entryName);

  var decompressedData = zip.readFile(entry);
  console.log(decompressedData);

  console.log(zip.readAsText(entry));
});
