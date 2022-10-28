// parser
import Parser from './parser.js';

/**
 * parseUserAgent
 * @param {*} useragent 
 * @returns 
 */
function parseUserAgent(useragent) {
    // check
    if (!useragent) return;

    // parse
    const parserRes = (new Parser(useragent)).getResult();

    // res
    parserRes.isMobile = parserRes && parserRes.platform && parserRes.platform.type == 'mobile';
    return parserRes;
}

export default parseUserAgent;