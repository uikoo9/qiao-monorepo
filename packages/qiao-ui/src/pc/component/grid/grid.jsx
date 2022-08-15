// react
import React, { useState, useEffect, useRef } from 'react';

// ui
import { Table, Toolbar } from '../../index.js';

/**
 * grid
 */
export const Grid = (props) => {
    console.log('qiao-ui/pc/grid: render');

    // state
    const [cks, setCks] = useState([]);
    const [cols, setCols] = useState(null);
    const [rows, setRows] = useState(null);
    const [sumpage, setSumpage] = useState(null);
    const [pagenumber, setPagenumber] = useState(null);

    // ref
    const editModalRef = useRef(null);
    const searchModalRef = useRef(null);

    // effect
    useEffect(() => {
        console.log('qiao-ui/pc/grid: useEffect');
        reload();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    // reload
    const reload = async (data, pagenumber) => {
        console.log('qiao-ui/pc/grid: reload');

        const res = await props.init(data, pagenumber);
        setCols(res.cols);
        setRows(res.rows);
        setSumpage(res.sumpage);
        setPagenumber(res.pagenumber);
    };

    // edit row
    const editRow = (row) => {
        console.log('qiao-ui/pc/grid: editRow');

        editModalRef.current.modalShow(row);
    };

    // del row
    const delRow = async (id) => {
        console.log('qiao-ui/pc/grid: delRow');

        const isSuc = await props.del(id);
        if (!isSuc) return;

        reload();
        setCks([]);
    };

    // toolbar
    const checkboxChange = (e) => {
        console.log('qiao-ui/pc/grid: checkboxChange');

        if (e.target.checked) {
            cks.push(e.target.value);
        } else {
            const index = cks.indexOf(e.target.value);
            cks.splice(index, 1);
        }

        setCks(cks);
    };

    const EditModal = props.editModal;
    const SearchModal = props.searchModal;
    return <div className="data-container">
        <Toolbar
            cks={cks}
            editModal={editModalRef}
            searchModal={searchModalRef}
            delRows={delRow}
            reload={reload}
            sumpage={sumpage}
            pagenumber={pagenumber}
        />

        <Table
            cols={cols}
            rows={rows}
            editRow={editRow}
            delRow={delRow}
            checkboxChange={checkboxChange}
        />

        <EditModal
            ref={editModalRef}
            reload={reload}
        />

        <SearchModal
            ref={searchModalRef}
            reload={reload}
        />
    </div>;
};