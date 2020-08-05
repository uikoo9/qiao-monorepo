# urls
## homepage
[https://code.insistime.com/qiao.util.compress](https://code.insistime.com/qiao.util.compress)

## github
[https://github.com/insistime/qiao.util.compress](https://github.com/insistime/qiao.util.compress)

## npm
[https://www.npmjs.com/package/qiao.util.compress](https://www.npmjs.com/package/qiao.util.compress)

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

# started
## install
npm install qiao.util.compress

## dependencies
1. compressing

## documentation
1. compressing, https://www.npmjs.com/package/compressing

# api
## compressFile
```javascript
'use strict';

var path    = require('path');
var q       = require('qiao.util.compress');

var test = function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/source-file.js');
    var destPath    = path.resolve(__dirname, '../files_out/source-file.zip');

    q.compressFile('zip', sourceFile, destPath, function(){
        console.log(`compress file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }, function(e){
        console.log(`compress file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    });
};

test();
```

## compressFileSync
```javascript
'use strict';

var path    = require('path');
var q       = require('qiao.util.compress');

var test = async function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/source-file.js');
    var destPath    = path.resolve(__dirname, '../files_out/source-file.zip');

    try{
        await q.compressFileSync('zip', sourceFile, destPath);
        console.log(`compress file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }catch(e){
        console.log(`compress file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    }
};

test();
```

## compressFolder
```javascript
'use strict';

var path    = require('path');
var q       = require('qiao.util.compress');

var test = function(){
    var sourceFolder    = path.resolve(__dirname, '../node_modules');
    var destPath        = path.resolve(__dirname, '../files_out/node_modules.zip');

    q.compressFolder('zip', sourceFolder, destPath, function(){
        console.log(`compress folder success`);
        console.log(`   source file:    ${sourceFolder}`);
        console.log(`   dest path:      ${destPath}`);
    }, function(e){
        console.log(`compress folder fail`);
        console.log(`   source folder:  ${sourceFolder}`);
        console.log(`   error:          ${e}`);
    });
};

test();
```

## compressFolderSync
```javascript
'use strict';

var path    = require('path');
var q       = require('qiao.util.compress');

var test = async function(){
    var sourceFolder    = path.resolve(__dirname, '../node_modules');
    var destPath        = path.resolve(__dirname, '../files_out/node_modules.zip');

    try{
        await q.compressFolder('zip', sourceFolder, destPath);
        console.log(`compress folder success`);
        console.log(`   source file:    ${sourceFolder}`);
        console.log(`   dest path:      ${destPath}`);
    }catch(e){
        console.log(`compress folder fail`);
        console.log(`   source folder:  ${sourceFolder}`);
        console.log(`   error:          ${e}`);
    }
};

test();
```

## uncompress
```javascript
'use strict';

var path    = require('path');
var q       = require('qiao.util.compress');


var test = function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/uncompress-file.zip');
    var destPath    = path.resolve(__dirname, '../files_out/');

    q.uncompress('zip', sourceFile, destPath, function(){
        console.log(`uncompress file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }, function(e){
        console.log(`uncompress file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    });
};

test();
```

## uncompressSync
```javascript
'use strict';

var path    = require('path');
var q       = require('qiao.util.compress');

var test = async function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/uncompress-file.zip');
    var destPath    = path.resolve(__dirname, '../files_out/');

    try{
        await q.uncompressSync('zip', sourceFile, destPath);
        console.log(`uncompress file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }catch(e){
        console.log(`uncompress file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    }
};

test();
```

## zipFile
```javascript
'use strict';

var path    = require('path');
var q       = require('qiao.util.compress');

var test = function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/source-file.js');
    var destPath    = path.resolve(__dirname, '../files_out/source-file.zip');

    q.zipFile(sourceFile, destPath, function(){
        console.log(`zip file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }, function(e){
        console.log(`zip file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    });
};

test();
```

## zipFileSync
```javascript
'use strict';

var path    = require('path');
var q       = require('qiao.util.compress');

var test = async function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/source-file.js');
    var destPath    = path.resolve(__dirname, '../files_out/source-file.zip');

    try{
        await q.zipFileSync(sourceFile, destPath);
        console.log(`zip file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }catch(e){
        console.log(`zip file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    }
};

test();
```

## zipFolder
```javascript
'use strict';

var path    = require('path');
var q       = require('qiao.util.compress');

var test = function(){
    var sourceFolder    = path.resolve(__dirname, '../node_modules');
    var destPath        = path.resolve(__dirname, '../files_out/node_modules.zip');

    q.zipFolder(sourceFolder, destPath, function(){
        console.log(`zip folder success`);
        console.log(`   source file:    ${sourceFolder}`);
        console.log(`   dest path:      ${destPath}`);
    }, function(e){
        console.log(`zip folder fail`);
        console.log(`   source folder:  ${sourceFolder}`);
        console.log(`   error:          ${e}`);
    });
};

test();
```

## zipFolderSync
```javascript
'use strict';

var path    = require('path');
var q       = require('qiao.util.compress');

var test = async function(){
    var sourceFolder    = path.resolve(__dirname, '../node_modules');
    var destPath        = path.resolve(__dirname, '../files_out/node_modules.zip');

    try{
        await q.zipFolderSync(sourceFolder, destPath);
        console.log(`zip folder success`);
        console.log(`   source file:    ${sourceFolder}`);
        console.log(`   dest path:      ${destPath}`);
    }catch(e){
        console.log(`zip folder fail`);
        console.log(`   source folder:  ${sourceFolder}`);
        console.log(`   error:          ${e}`);
    }
};

test();
```

## unzip
```javascript
'use strict';

var path    = require('path');
var q       = require('qiao.util.compress');


var test = function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/uncompress-file.zip');
    var destPath    = path.resolve(__dirname, '../files_out/');

    q.unzip(sourceFile, destPath, function(){
        console.log(`unzip file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }, function(e){
        console.log(`unzip file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    });
};

test();
```

## unzipSync
```javascript
'use strict';

var path    = require('path');
var q       = require('qiao.util.compress');

var test = async function(){
    var sourceFile  = path.resolve(__dirname, '../files_in/uncompress-file.zip');
    var destPath    = path.resolve(__dirname, '../files_out/');

    try{
        await q.unzipSync(sourceFile, destPath);
        console.log(`unzip file success`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   dest path:      ${destPath}`);
    }catch(e){
        console.log(`unzip file fail`);
        console.log(`   source file:    ${sourceFile}`);
        console.log(`   error:          ${e}`);
    }
};

test();
```

# version
## 0.0.2.20200805
1. compress file chinese
2. uncompress file chinese
3. compress folder
4. zip and unzip

## 0.0.1.20200804
1. init project
2. uncompress
3. compress file