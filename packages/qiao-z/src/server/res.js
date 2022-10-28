// cookie
import cookie from 'cookie';

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
    res.head = head;
    res.end = end;
    res.redirect = redirect;
    res.send = send;
    res.json = json;
    res.jsonSuccess = jsonSuccess;
    res.jsonFail = jsonFail;
    res.clearCookie = clearCookie;
    res.render = render;

    return res;
};

// head
function head(status, options){
    this.heads = this.heads || [];
    this.heads.push({
        status: status,
        options: options
    });
}

// end
function end(msg){
    // clear cookies
    if(this.clearCookies && this.clearCookies.length){
        this.response.setHeader('Set-Cookie', this.clearCookies);
        delete this.clearCookies;
    }

    // heads
    if(this.heads && this.heads.length){
        const that = this;
        this.heads.forEach((v) => {
            that.response.writeHead(v.status, v.options);
        });

        delete this.heads;
    }

    // delete
    delete this.head;
    delete this.end;

    // end
    this.response.end(msg);
}

// redirect
function redirect(url) {
    // check
    if (!url) return;

    // redirect
    this.head(302, { 'Location': url });
    this.end();
}

// send
function send(msg) {
    if (!msg) return;

    this.head(200, { 'Content-Type': 'text/plain' });
    this.end(msg);
}

// json
function json(obj) {
    // check
    if (!obj) return;

    try {
        const msg = JSON.stringify(obj);
        this.head(200, { 'Content-Type': 'application/json' });
        this.end(msg);
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

// clear cookie
function clearCookie(name){
    const str = cookie.serialize(name, '', { expires: new Date(1), path: '/' });
    this.clearCookies = this.clearCookies || [];
    this.clearCookies.push(str);
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
    this.end();
}