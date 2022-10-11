/**
 * get
 * @param {*} db 
 * @param {*} tableName 
 * @param {*} key 
 * @returns 
 */
export const get = (db, tableName, key) => {
    return new Promise((resolve) => {
        getData(db, tableName, key, (r) => {
            resolve(r);
        });
    });
};

/**
 * save
 * @param {*} db 
 * @param {*} tableName 
 * @param {*} key 
 * @param {*} data 
 * @returns 
 */
export const save = (db, tableName, key, data) => {
    return new Promise((resolve) => {
        getData(db, tableName, key, (r) => {
            if (r) {
                putData(db, tableName, data, (rr) => {
                    resolve(rr);
                });
            } else {
                addData(db, tableName, data, (rr) => {
                    resolve(rr);
                });
            }
        });
    });
};

/**
 * del
 * @param {*} db 
 * @param {*} tableName 
 * @param {*} key 
 * @returns 
 */
export const del = (db, tableName, key) => {
    return new Promise((resolve, reject) => {
        const tx = db.transaction([tableName], 'readwrite');
        const request = tx.objectStore(tableName).delete(key);

        request.onerror = (event) => {
            reject(event.target.error);
        };
        request.onsuccess = () => {
            resolve();
        };
    });
};

/**
 * clear
 * @param {*} db 
 * @param {*} tableName 
 * @returns 
 */
export const clear = (db, tableName) => {
    return new Promise((resolve, reject) => {
        const tx = db.transaction([tableName], 'readwrite');
        const request = tx.objectStore(tableName).clear();

        request.onerror = (event) => {
            reject(event.target.error);
        };
        request.onsuccess = () => {
            resolve();
        };
    });
};

// get data
function getData(db, tableName, key, cb) {
    const tx = db.transaction([tableName], 'readonly');
    const request = tx.objectStore(tableName).get(key);

    request.onerror = () => {
        if (cb) cb(null);
    };
    request.onsuccess = () => {
        if (cb) cb(request.result);
    };
}

// add data
function addData(db, tableName, data, cb) {
    const tx = db.transaction([tableName], 'readwrite');
    const request = tx.objectStore(tableName).add(data);

    request.onerror = () => {
        if (cb) cb(false);
    };
    request.onsuccess = () => {
        if (cb) cb(true);
    };
}

// put data
function putData(db, tableName, data, cb) {
    const tx = db.transaction([tableName], 'readwrite');
    const request = tx.objectStore(tableName).put(data);

    request.onerror = () => {
        if (cb) cb(false);
    };
    request.onsuccess = () => {
        if (cb) cb(true);
    };
}