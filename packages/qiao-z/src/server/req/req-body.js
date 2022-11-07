// raw body
import getRawBody from 'raw-body';

// qs
import qs from 'qs';

// default body
const defaultBody = {};

/**
 * handle body
 * @param {*} req 
 * @param {*} upload 
 * @returns 
 */
const handleBody = async (req, upload) => {
    // check
    if (!req || !req.headers || !req.headers['content-type']) return defaultBody;

    // body
    let body;
    try {
        // content type
        const contentType = req.headers['content-type'];

        // upload
        if (contentType.indexOf('multipart/form-data') > -1) {
            if (!upload) return defaultBody;

            return await upload.uploadSync(req.request);
        } else {
            // body string
            const bodyString = await getBodyString(req);
            if (!bodyString) return defaultBody;

            // xfrom
            if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
                body = qs.parse(bodyString);
            }

            // json
            if (contentType.indexOf('application/json') > -1) {
                body = JSON.parse(bodyString);
            }
        }
    } catch (error) {
        console.log(error);
    }

    // return
    return body || defaultBody;
};

// get body string
async function getBodyString(req) {
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

export default handleBody;