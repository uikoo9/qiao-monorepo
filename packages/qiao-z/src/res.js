// qiao
const qiao = require('qiao-file');

// template
const template = require('art-template');

// out
const out = require('./out.js');

/**
 * res
 */
module.exports = function (response) {
    const res = {};
    res.response = response;
    res.redirect = redirect;
    res.render = render;

    return res;
};

/**
 * redirect
 * @param {*} url 
 */
function redirect(url) {
    this.response.writeHead(302, {
        'Location': url
    });
    this.response.end();
}

/**
 * render
 * @param {*} filePath 
 * @param {*} data 
 * @returns 
 */
function render(filePath, data) {
    if (!filePath) {
        out.error(this.response, 'render: please check file path!');
        return;
    }

    const finalPath = qiao.path.resolve(process.cwd(), filePath);
    if (!qiao.isExists(filePath)) {
        out.error(this.response, 'render: file path is not exists');
        return;
    }

    var html = template(finalPath, data || {});
    if (!html) {
        out.error(this.response, 'render: read file error');
        return;
    }

    this.response.writeHeader(200, { "Content-Type": "text/html" });
    this.response.write(html);
    this.response.end();
}