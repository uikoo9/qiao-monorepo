'use strict';

// qs
var qs = require('qs');

// qiao-ajax
var q = require('qiao-ajax');

// vars
var turl = 'https://tiyee.cn/2/create_short_url';
var noUrl = new Error('no url');
var resErr = new Error('res error');

/**
 * short link
 */
exports.shortLink = function (longLink) {
    return new Promise(function (resolve, reject) {
        if (!longLink) return reject(noUrl);

        // data
        var data = {
            url: longLink
        };

        // config
        var config = {
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data)
        };

        // post
        q.post(turl, config)
            .then(function (res) {
                // not 200
                if (!res || res.status != 200 || !res.data) {
                    return reject(resErr);
                }

                return resolve(res.data.short_url);
            })
            .catch(function (e) {
                reject(e);
            });
    });
};