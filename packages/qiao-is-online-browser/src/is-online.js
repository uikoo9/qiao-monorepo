/**
 * 
 * @param {string} src img src
 * @returns {string} 'online' or 'offline'
 * @example
'use strict';

var q = require('qiao-is-online-browser');

var test = async function(){
    try{
        var isOnlineImgSrc = 'your online img src';
        var isOnline = await q.isOnline(isOnlineImgSrc);
        console.log(isOnline);
    }catch(e){
        console.log(e);
    }
};

test();
 */
export const isOnline = (src) => {
  return new Promise(function (resolve, reject) {
    if (!src) return reject(Error("need online img src"));

    let img = new Image();
    img.src = `${src}?r=${Math.random()}`;
    img.onload = () => {
      resolve("online");
    };
    img.onerror = () => {
      resolve("offline");
    };
  });
};
