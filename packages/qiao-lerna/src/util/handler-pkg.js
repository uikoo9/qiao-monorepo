// qiao-parallel
import { parallelByIIFE } from 'qiao-parallel';

// vars
import { setLine, callback, complete } from './_funcs.js';
import { setIsDev, handler } from './_handler_pkg.js';

/**
 * handle pkg
 * @param {*} folders 
 * @param {*} line 
 * @param {*} isDev 
 */
const handlePkg = async (folders, line, isDev) => {
    setLine(line);
    setIsDev(isDev);

    parallelByIIFE(handler, folders, callback, complete);
};

export default handlePkg;