// path
import { resolve } from 'path';

// qiao
import { isExists, extname, readFile } from 'qiao-file';

// template
import template from 'art-template';

// out
import { error } from './out.js';

/**
 * res
 */
export default (response) => {
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
    // check
    if (!filePath) {
        error(this.response, 'render: please check file path!');
        return;
    }

    // final path
    const finalPath = resolve(process.cwd(), filePath);
    if (!isExists(filePath)) {
        error(this.response, 'render: file path is not exists');
        return;
    }

    // file
    let file;
    let contentType;
    if(extname(finalPath) == '.html'){
        file = template(finalPath, data || {});
        contentType = 'text/html';
    }else{
        file = readFile(finalPath);
        contentType = 'text/plain';
    }
    if (!file) {
        error(this.response, 'render: read file error');
        return;
    }

    this.response.writeHeader(200, { 'Content-Type': contentType });
    this.response.write(file);
    this.response.end();
}