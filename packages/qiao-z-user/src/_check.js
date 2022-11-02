// encode
var encode = require('qiao-encode');

// model
var ucenterUserModel = require('./ucenter/model/UcenterUserModel.js');

/**
 * check user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports = async function (req, res) {
    // normal visit
    let normalVisit = false;
    if(global.QIAO_USER_CONFIG && global.QIAO_USER_CONFIG.paths && global.QIAO_USER_CONFIG.paths.length){
        const normalVisitPath = global.QIAO_USER_CONFIG.paths;
        for (let i = 0; i < normalVisitPath.length; i++) {
            if (req.url.pathname == normalVisitPath[i]) normalVisit = true;
        }
    }
    if (normalVisit) return true;

    // auth - has token
    const userid = req.headers.userid || req.cookies.insistime_userid;
    const usertoken = req.headers.usertoken || req.cookies.insistime_usertoken;
    if (!userid || !usertoken) {
        res.jsonFail('缺少token！');
        return;
    }

    // auth - check token
    try {
        // get user
        const rows = await ucenterUserModel.ucenterUserGetById(userid);
        if (!rows || rows.length != 1) {
            res.jsonFail('缺少用户信息！');
            return;
        }

        // check token
        const user = rows[0];
        const username = user['ucenter_user_name'];
        const password = user['ucenter_user_password'];
        const rUsertoken = encode.AESEncrypt(username + password, global.QIAO_USER_CONFIG.encryptKey);

        // send
        if (usertoken != rUsertoken) {
            res.jsonFail('非法token！');
            return;
        }

        // set userinfo
        req.body['express_userid'] = userid;
        req.body['express_username'] = username;

        // return
        return true;
    } catch (e) {
        res.jsonFail('校验token失败！', { errName: e.name, errMsg: e.message });
        return;
    }
};