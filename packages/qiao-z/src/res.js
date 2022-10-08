// path
const path = require('path');

// http
const http = require('node:http');

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
    if(!filePath){
        out.error(this.response, 'qz: no file path');
        return;
    }

    const finalPath = path.resolve(process.cwd(), filePath);

    console.log(finalPath);
};