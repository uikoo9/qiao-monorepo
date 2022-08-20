/**
 * normalLog
 * @param {*} msg 
 * @param {*} color 
 */
const normalLog = (msg, color) => {
    logRed(`%c${msg}`, color);
};

/**
 * logRed
 * @param {*} msg 
 */
export const logRed = (msg) => {
    normalLog(msg, 'color: red');
};