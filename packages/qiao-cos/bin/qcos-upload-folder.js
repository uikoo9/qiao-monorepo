'use strict';

// path
var path = require('path');

// qiao
var qiao = {};
qiao.cli = require('qiao-cli');
qiao.cos = require('../index.js');

// cmd for folder
qiao.cli.cmd
    .command('folder <configPath> <folderPath> <bucketPath>')
    .alias('fo')
    .description('upload folder to tencent cos bucket')
    .option('-i, --info', 'show upload info')
    .action(uploadFolder);

// upload folder
async function uploadFolder(configPath, folderPath, bucketPath, options){
    try{
        var cwd = process.cwd();
        if(configPath.startsWith('./')) configPath = path.resolve(cwd, configPath);
        if(folderPath.startsWith('./')) folderPath = path.resolve(cwd, folderPath);

        var client 	= qiao.cos.client(require(configPath));
        var rs 		= await qiao.cos.uploadFolderSync(client, bucketPath, folderPath);

        console.log('upload folder to tencent cos success!');
        console.log();

        if(options.info) console.log(rs);
    }catch(e){
        console.log('upload folder to tencent cos fail!');
        console.log();
		
        console.log(e);
    }
}
