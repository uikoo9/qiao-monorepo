// raw body
import getRawBody from 'raw-body';

/**
 * handle body
 * @param {*} req 
 * @returns 
 */
export default async (req) => {
    const body = {};

    try{
        // options
        const options = {
            length: req.headers['content-length'],
            limit: '1mb',
            encoding: true
        };

        // body str
        const bodyString = await getRawBody(req.request, options);
        if(!bodyString) return body;

        // split
        const bodySplit = bodyString.split('&');
        if(!bodySplit || !bodySplit.length) return body;

        // each
        bodySplit.forEach(v => {
            const vv = v.split('=');
            if(!vv || vv.length != 2) return;

            body[vv[0]] = vv[1];
        });
    }catch(e){
        console.log(e);
    }

    return body;
};