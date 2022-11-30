// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的test.zip文件
var localZip = new admZip('d:/test.zip');
console.log(localZip);

// 在内存中创建新的zip文件
var newZip = new admZip();
console.log(newZip);
