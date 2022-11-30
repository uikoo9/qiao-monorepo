// 引入adm-zip
var admZip = require('adm-zip');

// 在内存中创建新的zip文件
var zip = new admZip();

// 为zip添加本地文件夹
zip.addLocalFolder('d:/test');

// 生成zip文件
zip.writeZip('d:/test.zip');
