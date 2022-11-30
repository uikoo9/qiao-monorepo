// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 将d:/test.zip这个zip文件解压缩到d:/test11文件夹下
// 第一个true，是否覆盖
zip.extractAllTo('d:/test11', true);
