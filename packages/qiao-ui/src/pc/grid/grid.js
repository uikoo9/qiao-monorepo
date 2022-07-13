/**
 * gridInit
 * @param {*} listFunc 
 * @param {*} pagenumber 
 * @param {*} cols 
 * @returns 
 */
export const gridInit = async (listFunc, pagenumber, cols) => {
    // res
    const res = await listFunc(pagenumber, window.pagesize);
    if (res.type != 'success') {
        console.error(res);
        return;
    }

    // rows
    const resRows = res.obj.rows;
    const rows = resRows.map((row, index) => {
        // ck
        const defaultRow = cols.includes('ck') ? { ck: true } : {};
        const finalRow = Object.assign(defaultRow, row);

        // other
        const keys = Object.keys(finalRow);
        keys.forEach((key) => {
            if (!cols.includes(key)) {
                delete finalRow[key];
            }
        });

        // op
        if (cols.includes('op')) {
            finalRow.op = true;
        }

        return finalRow;
    });

    return {
        rows: rows,
        sumpage: res.obj.sumpage,
        pagenumber: res.obj.pagenumber,
    };
};

/**
 * gridSave
 * @param {*} that 
 * @param {*} saveFunc 
 * @param {*} name 
 * @param {*} order 
 * @param {*} id 
 * @returns 
 */
export const gridSave = async (that, saveFunc, name, order, id) => {
    const res = await saveFunc(name, order, id);
    if (!res || res.type != 'success') {
        that.setState({
            tips: res.msg
        });
        return;
    }

    return true;
};

/**
 * gridDel
 * @param {*} delFunc 
 * @param {*} ids 
 * @returns 
 */
export const gridDel = async (delFunc, ids) => {
    const res = await delFunc(`${ids}`);
    if (!res || res.type != 'success') {
        alert(res.msg);
        return;
    }

    return true;
}