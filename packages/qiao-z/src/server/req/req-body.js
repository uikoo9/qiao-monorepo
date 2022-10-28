// raw body
import getRawBody from 'raw-body';

// qs
import qs from 'qs';

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

        // return
        return qs.parse(bodyString);
    }catch(e){
        console.log(e);
    }

    return body;
};