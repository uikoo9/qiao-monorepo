/**
 * init options
 */
export default (app, routers) => {
    // check
    if (!app || !routers) return;

    // options
    app.options = () => {
        // callback
        const callback = (req, res) => {
            console.log(1111);
            res.response.writeHead(200, {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': '*',
            });
            res.end();
        };

        // options
        routers.options = routers.options || [];
        routers.options.push({
            path: null,
            callback: callback,
            options: true,
        });
    };

    // run
    app.options();
};