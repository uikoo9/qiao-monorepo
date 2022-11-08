// qiao-parallel
import { parallelByIIFE } from 'qiao-parallel';

// vars
import { setLine, callback, complete } from './_funcs.js';
import { handler } from './_handler_ncu.js';

/**
 * handle multi ncu
 * @param {*} folders 
 * @param {*} line 
 */
const handleMultiNCU = async (folders, line) => {
    setLine(line);

    parallelByIIFE(handler, folders, callback, complete);
};

export default handleMultiNCU;