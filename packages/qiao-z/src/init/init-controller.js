// qiao
const qiao = require('qiao-file');

/**
 * init controller
 */
module.exports = function (app) {
    // app controller
    const serverFiles = qiao.lsdir(process.cwd() + '/');
    serverFiles.files.forEach((serverFile) => {
        const file = serverFile.path + serverFile.name;
        
        if (/Controller\.js$/.test(file)) require(file)(app);
    });
};