# qiao-zip

## api

### unzip

```javascript
"use strict";

var q = require("qiao-zip");

var test = function () {
  var zipFile = "d:/test1.zip";
  var destFolder = "d:/test2/";

  q.unzip(zipFile, destFolder);
};

test();
```

### zipFileSync

```javascript
"use strict";

var q = require("qiao-zip");

var test = async function () {
  var sourceFile = "d:/test.js";
  var destZip = "d:/test22.zip";

  try {
    var msg = await q.zipFileSync(sourceFile, destZip);
    console.log(msg);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### zipFolderSync

```javascript
"use strict";

var q = require("qiao-zip");

var test = async function () {
  var sourceFolder = "d:/test/";
  var destZip = "d:/test24.zip";

  try {
    var msg = await q.zipFolderSync(sourceFolder, destZip);
    console.log(msg);
  } catch (e) {
    console.log(e);
  }
};

test();
```

### zipFile

```javascript
"use strict";

var q = require("qiao-zip");

var test = function () {
  var sourceFile = "d:/test.js";
  var destZip = "d:/test22.zip";

  q.zipFile(sourceFile, destZip, function (err, msg) {
    if (err) throw err;

    console.log(msg);
  });
};

test();
```

### zipFolder

```javascript
"use strict";

var q = require("qiao-zip");

var test = function () {
  var sourceFolder = "d:/test/";
  var destZip = "d:/test23.zip";

  q.zipFolder(sourceFolder, destZip, function (err, msg) {
    if (err) throw err;

    console.log(msg);
  });
};

test();
```

## version

### 0.2.3.20220417

1. add lerna

### 0.2.2.20200803

1. del cli

### 0.2.1.20200803

1. ncu

### 0.2.0.20191206

1. add funding
2. update packages

### 0.1.9.20190314

1. add qiao.util.file
2. zip file and folder add mkdir
3. fix subdir
4. modify md

### 0.1.8.20190307

1. fix archiver file name bug

### 0.1.7.20190306

1. modify keywords

### 0.1.6.20190304

1. add adm-zip demos
2. add adm-zip md
3. add adm-zip zh md

### 0.1.5.20190227

1. zip and unzip use adm-zip
2. fix chinese bug

### 0.1.4.20190109

1. qzip
2. modify md
3. add qiao-cli
4. modify qzip
5. update qiao-cli@0.0.6
6. output help

### 0.1.3.20190107

1. nodejs zip and unzip tool
2. update all packages

### 0.1.2.20181127

1. modify method name
2. add .js

### 0.1.1.20181012

1. npm audit

### 0.1.0.20180720

1. https homepage

### 0.0.9.20180719

1. modify readme.md

### 0.0.8.20180511

1. npm audit

### 0.0.7.20180210

1. highlight md

### 0.0.6.20180208

1. update git url

### 0.0.5.20180117

1. add log
2. var test
3. wait...
4. add subdir

### 0.0.4.20180113

1. 代码优化

### 0.0.3.20180112

1. add qzip cli
2. npm publish 0.0.9
3. crlf --> lf

### 0.0.2.20171229

1. 修改 readme.md 的代码示例

### 0.0.1.20171228

1. 初始化项目
2. unzip by adm-zip
3. zip file by archiver
4. zip folder by archiver
5. zip file sync
6. zip folder sync
7. readme.md
8. add index.js
