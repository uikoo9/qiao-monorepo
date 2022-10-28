// raw body
import getRawBody from 'raw-body';

// qs
import qs from 'qs';

// default body
const defaultBody = {};

/**
 * handle body
 * @param {*} req 
 * @returns 
 */
export default async (req) => {
    // check
    if(!req || !req.headers || !req.headers['content-type']) return defaultBody;

    // body string
    const bodyString = await getBodyString(req);
    if(!bodyString) return defaultBody;

    // body
    let body;
    try {
        // content type
        const contentType = req.headers['content-type'];

        // xfrom
        if(contentType == 'application/x-www-form-urlencoded'){
            body = qs.parse(bodyString);
            console.log(contentType, body);
        }
    
        // json
        if(contentType == 'application/json'){
            body = JSON.parse(bodyString);
            console.log(contentType, body);
        }
    } catch (error) {
        console.log(error);
    }

    // return
    return body || defaultBody;
};

// get body string
async function getBodyString(req){
    try {
        // options
        const options = {
            length: req.headers['content-length'],
            limit: '1mb',
            encoding: true
        };

        // body str
        return await getRawBody(req.request, options);
    } catch (e) {
        console.log(e);
        return null;
    }
}