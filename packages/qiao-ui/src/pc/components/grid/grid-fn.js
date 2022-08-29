/**
 * gridInit
 * @param {*} listFunc 
 * @param {*} data 
 * @param {*} pagenumber 
 * @param {*} cols 
 * @returns 
 */
export const gridInit = async (listFunc, data, pagenumber, cols) => {
    // res
    const res = await listFunc(data || {}, pagenumber, window.pagesize);
    if (res.type != 'success') {
        console.error(res);
        return;
    }

    // rows
    const resRows = res.obj.rows;
    const rows = resRows.map((row) => {
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
};