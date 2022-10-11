/**
 * get data
 * @param {*} db 
 * @param {*} tableName 
 * @param {*} indexName 
 * @returns 
 */
export const getAll = (db, tableName, indexName) => {
    return new Promise((resolve, reject) => {
        const tx = db.transaction([tableName], 'readonly');
        const os = tx.objectStore(tableName);
        const index = os.index(indexName);
        const request = index.getAll();

        request.onerror = (event) => {
            reject(event.target.error);
        };
        request.onsuccess = () => {
            resolve(request.result);
        };
    });
};