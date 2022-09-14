// qiao
var qiao = require('./_qiao.js');

// model
var ucenterUserModel = require('./ucenter/model/UcenterUserModel.js');

/**
 * check user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
module.exports = async function(req, res, next){
    // auth - has token
    const userid = req.headers.userid || req.cookies.insistime_userid;
    const usertoken = req.headers.usertoken || req.cookies.insistime_usertoken;
    if (!userid || !usertoken) {
        res.send(qiao.json.danger('缺少token！'));
        return;
    }

    // auth - check token
    try {
        // get user
        const rows = await ucenterUserModel.ucenterUserGetById(userid);
        if (!rows || rows.length != 1) {
            res.send(qiao.json.danger('缺少用户信息！'));
            return;
        }

        // check token
        const user = rows[0];
        const username = user['ucenter_user_name'];
        const password = user['ucenter_user_password'];
        const rUsertoken = qiao.encode.AESEncrypt(username + password, global.config.encryptKey);

        // send
        if (usertoken != rUsertoken) {
            res.send(qiao.json.danger('非法token！'));
            return;
        }

        // set userinfo
        req.body['express_userid'] = userid;
        req.body['express_username'] = username;

        next();
    } catch (e) {
        res.send(qiao.json.danger('校验token失败！', { errName: e.name, errMsg: e.message }));
    }
};