'use strict';

/**
 * json
 * 	type
 * 	msg
 * 	obj
 */
const json = (type, msg, obj) => {
    var json = {
        success: true,
        msg: '',
        type: '',
        obj: null
    };

    if (type) json.type = type;
    if (msg) json.msg = msg;
    if (obj) json.obj = obj;

    return json;
};

/**
 * success
 * 	msg
 * 	obj
 */
const success = (msg, obj) => {
    return json('success', msg, obj);
};

/**
 * info
 * 	msg
 * 	obj
 */
const info = (msg, obj) => {
    return json('info', msg, obj);
};

/**
 * warning
 * 	msg
 * 	obj
 */
const warning = (msg, obj) => {
    return json('warning', msg, obj);
};

/**
 * danger
 * 	msg
 * 	obj
 */
const danger = (msg, obj) => {
    return json('danger', msg, obj);
};

exports.danger = danger;
exports.info = info;
exports.json = json;
exports.success = success;
exports.warning = warning;
