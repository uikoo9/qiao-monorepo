// path
import { resolve } from 'path';

// qiao
import { isExists, extname, readFile } from 'qiao-file';

// template
import template from 'art-template';

/**
 * res
 */
export default (response) => {
    const res = {};
    res.response = response;
    res.redirect = redirect;
    res.send = send;
    res.json = json;
    res.jsonSuccess = jsonSuccess;
    res.jsonFail = jsonFail;
    res.render = render;

    return res;
};

// redirect
function redirect(url) {
    // check
    if (!url) return;

    // redirect
    this.response.writeHead(302, { 'Location': url });
    this.response.end();
}

// send
function send(msg) {
    if (!msg) return;

    this.response.writeHead(200, { 'Content-Type': 'text/plain' });
    this.response.end(msg);
}

// json
function json(obj) {
    // check
    if (!obj) return;

    try {
        const msg = JSON.stringify(obj);
        this.response.writeHead(200, { 'Content-Type': 'application/json' });
        this.response.end(msg);
    } catch (error) {
        console.log(error);
        this.send('res.json obj error');
    }
}

// json success
function jsonSuccess(msg, obj) {
    // check
    if (!msg) return;

    // json
    const jsonObj = {
        type: true,
        msg: msg,
    };

    // obj
    if (obj) jsonObj.obj = obj;

    // send
    this.json(jsonObj);
}

// json fail
function jsonFail(msg, obj) {
    // check
    if (!msg) return;

    // json
    const jsonObj = {
        type: false,
        msg: msg,
    };

    // obj
    if (obj) jsonObj.obj = obj;

    // send
    this.json(jsonObj);
}

// render
function render(filePath, data){
    // check
    if (!filePath) {
        this.send('render: please check file path!');
        return;
    }

    // final path
    const finalPath = resolve(process.cwd(), filePath);
    if (!isExists(filePath)) {
        this.send('render: file path is not exists');
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
        this.send('render: read file error');
        return;
    }

    this.response.writeHeader(200, { 'Content-Type': contentType });
    this.response.write(file);
    this.response.end();
}