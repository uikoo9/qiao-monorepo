/**
 * index controller
 */
module.exports = function (app) {
    // index
    app.get('/*', function (req, res) {
        const data = {
            user: {
                name: 'jack'
            }
        };

        res.render('./__tests__/views/index.html', data);
    });
};