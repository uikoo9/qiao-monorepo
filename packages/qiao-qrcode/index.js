'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var qrcode = require('qrcode');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var qrcode__default = /*#__PURE__*/_interopDefaultLegacy(qrcode);

// qrcode

/**
 * qrcode canvas
 * @param {*} id 
 * @param {*} text 
 * @returns 
 */
const qrcodeCanvas = (id, text) => {
    // check
    if (!id || !text) return;

    // options
    const options = {};

    // div
    const $div = document.getElementById(id);
    if (!$div) return;

    // canvas
    const cid = `${id}-canvas`;
    $div.innerHTML = `<canvas id="${cid}"></canvas>`;

    // render
    options.width = options.width || $div.offsetWidth;
    qrcode__default['default'].toCanvas(document.getElementById(cid), text, options, (error) => {
        if (error) {
            console.error(error);
            return;
        }
    });
};

// qrcode

/**
 * qrcode img
 * @param {*} id 
 * @param {*} text 
 * @returns 
 */
const qrcodeImg = (id, text) => {
    // check
    if (!id || !text) return;

    // options
    const options = {};

    // div
    const $div = document.getElementById(id);
    if (!$div) return;

    // render
    options.width = options.width || $div.offsetWidth;
    qrcode__default['default'].toDataURL(text, options, (error, url) => {
        if (error) {
            console.error(error);
            return;
        }

        const img = new Image();
        img.src = url;
        img.width = options.width;
        img.height = options.width;

        $div.appendChild(img);
    });
};

// qrcode

/**
 * qrcode svg
 * @param {*} id 
 * @param {*} text 
 * @returns 
 */
const qrcodeSvg = (id, text) => {
    // check
    if (!id || !text) return;

    // options
    const options = {};

    // div
    const $div = document.getElementById(id);
    if (!$div) return;

    // render
    options.width = options.width || $div.offsetWidth;
    qrcode__default['default'].toString(text, options, (error, svg) => {
        if (error) {
            console.error(error);
            return;
        }

        $div.innerHTML = svg;
    });
};

exports.qrcodeCanvas = qrcodeCanvas;
exports.qrcodeImg = qrcodeImg;
exports.qrcodeSvg = qrcodeSvg;
