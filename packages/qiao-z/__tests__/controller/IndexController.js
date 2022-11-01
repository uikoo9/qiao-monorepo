/**
 * index controller
 */
module.exports = function (app) {
    // app
    // require('./app/app-all.js')(app);
    require('./app/app-index.js')(app);
    require('./app/app-get.js')(app);
    require('./app/app-static.js')(app);

    // req
    require('./req/req-url.js')(app);
    require('./req/req-query.js')(app);
    require('./req/req-params.js')(app);
    require('./req/req-body.js')(app);
    require('./req/req-headers.js')(app);
    require('./req/req-useragent.js')(app);
    require('./req/req-cookies.js')(app);

    // res
    require('./res/res-redirect.js')(app);
    require('./res/res-send.js')(app);
    require('./res/res-json.js')(app);
    require('./res/res-json-success.js')(app);
    require('./res/res-json-fail.js')(app);
    require('./res/res-clear-cookie.js')(app);
    require('./res/res-render-file.js')(app);
    require('./res/res-render-html.js')(app);
};