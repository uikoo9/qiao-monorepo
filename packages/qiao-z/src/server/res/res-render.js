// path
import { resolve } from 'path';

// qiao
import { isExists, extname, readFile } from 'qiao-file';

// template
import template from 'art-template';

/**
 * res.render
 * @param {*} res 
 * @param {*} filePath 
 * @param {*} data 
 * @returns 
 */
const render = (res, filePath, data) => {
    // check res
    if (!res) return;

    // check
    if (!filePath) {
        res.send('render: please check file path!');
        return;
    }

    // final path
    const finalPath = resolve(process.cwd(), filePath);
    if (!isExists(filePath)) {
        res.send('render: file path is not exists');
        return;
    }

    // file
    let file;
    let contentType;
    if (extname(finalPath) == '.html') {
        file = template(finalPath, data || {});
        contentType = 'text/html';
    } else {
        file = readFile(finalPath);
        contentType = 'text/plain';
    }
    if (!file) {
        res.send('render: read file error');
        return;
    }

    res.response.writeHeader(200, { 'Content-Type': contentType });
    res.response.write(file);
    res.end();
};

export default render;