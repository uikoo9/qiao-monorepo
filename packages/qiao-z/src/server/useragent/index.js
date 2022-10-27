// parser
import Parser from './parser.js';

/**
 * useragent
 */
export default (req) => {
    // check
    if(!req || !req.headers || !req.headers['user-agent']) return {};

    // ua
    const useragent = req.headers['user-agent'];

    // parse
    const parserRes = (new Parser(useragent)).getResult();

    // res
    parserRes.ua = useragent;
    parserRes.isMobile = parserRes && parserRes.platform && parserRes.platform.type == 'mobile';
    return parserRes;
};