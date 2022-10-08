// qiao
const qiao = require('qiao-file');

// out
const out = require('./util/out.js');

/**
 * res
 */
const res = exports = module.exports = {};

/**
 * render
 * @param {*} filePath 
 * @returns 
 */
res.render = function (filePath) {
    if (!filePath) {
        out.error(this.response, 'qz: no file path');
        return;
    }

    const finalPath = qiao.path.resolve(process.cwd(), filePath);
    if (!qiao.isExists(filePath)) {
        out.error(this.response, 'qz: file path is not exists');
        return;
    }

    const html = qiao.readFile(finalPath);
    if(!html){
        out.error(this.response, 'qz: read file error');
        return;
    }

    this.response.writeHeader(200, {"Content-Type": "text/html"});  
    this.response.write(html);  
    this.response.end();  
};