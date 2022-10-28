/**
 * app get
 */
module.exports = function (app) {
    app.static('/static', './static');
};