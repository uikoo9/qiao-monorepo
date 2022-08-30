/**
 * json
 * 	type
 * 	msg
 * 	obj
 */
export const json = (type, msg, obj) => {
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
export const success = (msg, obj) => {
    return json('success', msg, obj);
};

/**
 * info
 * 	msg
 * 	obj
 */
export const info = (msg, obj) => {
    return json('info', msg, obj);
};

/**
 * warning
 * 	msg
 * 	obj
 */
export const warning = (msg, obj) => {
    return json('warning', msg, obj);
};

/**
 * danger
 * 	msg
 * 	obj
 */
export const danger = (msg, obj) => {
    return json('danger', msg, obj);
};