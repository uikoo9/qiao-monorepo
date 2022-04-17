var fs			= require('fs');
var path		= require('path');
var archiver	= require('archiver');

/**
 * zip file
 *   sourceFile，待压缩的文件
 *   destZip，压缩后的zip文件
 *   cb，callback
 */
function zipFile(sourceFile, destZip, cb){
	// init
	var output = fs.createWriteStream(destZip);
	var archive = archiver('zip', {
	    zlib: { level: 9 }
	});
	
	// on
	output.on('close', function(){
		cb(null, 'zip file success!');
	});
	archive.on('error', function(err){
		cb(err);
	});

	// zip
	archive.pipe(output);
	archive.file(sourceFile, {
		name : path.basename(sourceFile)
	});
	archive.finalize();
}

/**
 * test
 */
function test(){
    var sourceFile    = 'd:/zip/demo03/test-你好.js';
    var destZip       = 'd:/zip/demo03/test.zip';
  
    zipFile(sourceFile, destZip, function(err, msg){
    	console.log(err, msg);
    });
}
test();