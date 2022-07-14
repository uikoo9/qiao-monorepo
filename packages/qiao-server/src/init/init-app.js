// express
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

/**
 * init app
 * @returns 
 */
export default () => {
    const app = express();
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.text({type:'text/xml'}));

    return app;
};