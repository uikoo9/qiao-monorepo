// qiao
const qiao = require('qiao-file');

// out
const out = require('./out.js');

/**
 * res
 */
module.exports = function (response) {
    const res = {};
    res.response = response;
    res.render = render;
    
    return res;
};

/**
 * render
 * @param {*} filePath 
 * @returns 
 */
function render(filePath) {
    if (!filePath) {
        out.error(this.response, 'render: please check file path!');
        return;
    }

    const finalPath = qiao.path.resolve(process.cwd(), filePath);
    if (!qiao.isExists(filePath)) {
        out.error(this.response, 'render: file path is not exists');
        return;
    }

    const html = qiao.readFile(finalPath);
    if (!html) {
        out.error(this.response, 'render: read file error');
        return;
    }

    this.response.writeHeader(200, { "Content-Type": "text/html" });
    this.response.write(html);
    this.response.end();
};