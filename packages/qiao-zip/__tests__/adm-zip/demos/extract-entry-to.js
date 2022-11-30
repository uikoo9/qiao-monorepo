// 引入adm-zip
var admZip = require('adm-zip');

// 加载并解析存在的d:/test.zip文件
var zip = new admZip('d:/test.zip');

// 获取d:/test.zip中的entry.js这个entry
var entry = zip.getEntry('entry.js');

// 将test.js这个entry解压缩到d:/
// 第一个true，如果有父文件夹则创建父文件夹
// 第二个true，是否覆盖
zip.extractEntryTo(entry, 'd:/', true, true);
